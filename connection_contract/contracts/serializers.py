from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import Contract, ConnectionAddress


class ConnectionAddressModelSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = ConnectionAddress
        fields = '__all__'


class ContractModelSerializer(HyperlinkedModelSerializer):
    address = ConnectionAddressModelSerializer()

    class Meta:
        model = Contract
        fields = '__all__'
