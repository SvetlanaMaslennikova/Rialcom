from rest_framework.viewsets import ModelViewSet
from .models import Contract, ConnectionAddress
from .serializers import ContractModelSerializer, ConnectionAddressModelSerializer


class ConnectionAddressModelViewSet(ModelViewSet):
    queryset = ConnectionAddress.objects.all()
    serializer_class = ConnectionAddressModelSerializer


class ContractModelViewSet(ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractModelSerializer
    filterset_fields = ['last_name', 'first_name', 'surname', 'address']
