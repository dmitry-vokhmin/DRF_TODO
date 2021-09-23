from rest_framework.serializers import ModelSerializer
from .models import Project, Todo
from todo_apps.users.serializers import UserSerializer


class ProjectSerializer(ModelSerializer):
    users = UserSerializer(many=True)

    class Meta:
        model = Project
        fields = "__all__"


class TodoSerializer(ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Todo
        fields = ['project', 'text', 'is_active', 'user']
