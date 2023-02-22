from rest_framework import generics
from rest_framework.decorators import action
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from .models import Contract, ConnectionAddress
from .serializers import ContractModelSerializer, ConnectionAddressModelSerializer
from rest_framework.views import APIView


class ContractPaginator(LimitOffsetPagination):
    default_limit = 10


class ContractModelViewSet(ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractModelSerializer
    pagination_class = ContractPaginator


class ConnectionAddressModelViewSet(ModelViewSet):
    queryset = ConnectionAddress.objects.all()
    serializer_class = ConnectionAddressModelSerializer

