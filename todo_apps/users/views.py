from rest_framework.viewsets import GenericViewSet
from rest_framework import mixins
from rest_framework.permissions import DjangoModelPermissions
from .models import User
from .serializers import UserSerializer, UserSerializerV2


class UserModelViewSet(mixins.ListModelMixin,
                       mixins.RetrieveModelMixin,
                       mixins.UpdateModelMixin,
                       GenericViewSet):
    queryset = User.objects.all()
    permission_classes = [DjangoModelPermissions]

    def get_serializer_class(self):
        if self.request.version == "v2":
            return UserSerializerV2
        return UserSerializer
