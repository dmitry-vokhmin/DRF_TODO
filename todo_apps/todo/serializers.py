from rest_framework.serializers import ModelSerializer, IntegerField
from .models import Project, Todo


class ProjectSerializer(ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class TodoSerializer(ModelSerializer):

    class Meta:
        model = Todo
        fields = ['id', 'project', 'text', 'is_active', 'user']
