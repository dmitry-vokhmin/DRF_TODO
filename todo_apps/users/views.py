from rest_framework.viewsets import GenericViewSet
from rest_framework import mixins
from .models import User
from .serializers import UserSerializer


class UserModelViewSet(mixins.ListModelMixin,
                       mixins.RetrieveModelMixin,
                       mixins.UpdateModelMixin,
                       GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
