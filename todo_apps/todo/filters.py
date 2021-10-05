from django_filters import rest_framework as filters
from .models import Project, Todo


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class TodoFilter(filters.FilterSet):
    project__name = filters.CharFilter(lookup_expr='contains')
    created_at__gt = filters.DateFilter(field_name="created_at", lookup_expr='gt')
    created_at__lt = filters.DateFilter(field_name="created_at", lookup_expr='lt')

    class Meta:
        model = Todo
        fields = []
