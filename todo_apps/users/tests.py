from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import Group, Permission
from django.contrib.contenttypes.models import ContentType
from mixer.backend.django import mixer
from todo_apps.users.models import User
from todo_apps.todo.models import Todo, Project


class UserTestCase(APITestCase):

    def setUp(self):
        group_dev = Group.objects.create(name='developers')
        group_proj_owner = Group.objects.create(name='project_owners')
        todos = ContentType.objects.get_for_model(Todo)
        projects = ContentType.objects.get_for_model(Project)
        todos_permissions = Permission.objects.filter(content_type=todos).all()
        projects_permissions = Permission.objects.filter(content_type=projects).all()
        group_dev.permissions.set(todos_permissions)
        group_proj_owner.permissions.set(todos_permissions)
        group_proj_owner.permissions.add(*projects_permissions)
        self.dev_user = User.objects.create_user(username='dev', email='dev@dev.com', password='12345')
        self.dev_user.groups.add(group_dev)
        self.proj_user = User.objects.create_user(username='proj', email='proj@dev.com', password='12345')
        self.proj_user.groups.add(group_proj_owner)
        self.admin = User.objects.create_superuser(username='admin', email='admin@dev.com', password='12345')
        for _ in range(5):
            tmp_project = mixer.blend(Project)
            tmp_project.users.add(self.proj_user)
            for _ in range(2):
                mixer.blend(Todo, user=self.proj_user, project=tmp_project)

    def test_dev_user_permissions(self):
        self.client.login(username='dev', password='12345')
        res = self.client.get('/api/projects/')
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data['results']), 5)
        res = self.client.post('/api/projects/', data={
            'name': "dev_project",
            'url': ''
        })
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
        mixer.blend(User)
        res = self.client.post('/api/users/', data={
            'username': 'test',
            'email': 'test@test.com',
            'password': '12345'
        })
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)

    def test_project_user_permissions(self):
        self.client.login(username='proj', password='12345')
        res = self.client.get('/api/projects/')
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data['results']), 5)
        res = self.client.post('/api/projects/', data={
            'name': "project_test",
            'url': '',
            'users': self.proj_user.id
        })
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        res = self.client.post('/api/todo/', data={
            'text': "project_test",
            'project': Project.objects.first().id,
            'user': self.proj_user.id,
            'is_active': True
        })
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        res = self.client.post('/api/users/', data={
            'username': 'test',
            'email': 'test@test.com',
            'password': '12345'
        })
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
