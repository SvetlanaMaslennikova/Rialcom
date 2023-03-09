from rest_framework.viewsets import ModelViewSet
from .models import Contract, Address
from .serializers import ContractModelSerializer, AddressModelSerializer


class AddressModelViewSet(ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressModelSerializer


class ContractModelViewSet(ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractModelSerializer
    filterset_fields = ['last_name', 'first_name', 'surname', 'address']
