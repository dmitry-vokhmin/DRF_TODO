import graphene
from graphene_django import DjangoObjectType
from .models import Todo, Project
from todo_apps.users.models import User


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']


class Query(graphene.ObjectType):
    all_todos = graphene.List(TodoType)
    all_projects = graphene.List(ProjectType)
    all_users = graphene.List(UserType)

    def resolve_all_todos(root, info):
        return Todo.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_users(root, info):
        return User.objects.all()


schema = graphene.Schema(query=Query)
