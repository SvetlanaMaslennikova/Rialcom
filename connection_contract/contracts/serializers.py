from rest_framework.serializers import ModelSerializer
from .models import Contract, ConnectionAddress


class ContractModelSerializer(ModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'


class ConnectionAddressModelSerializer(ModelSerializer):

    class Meta:
        model = ConnectionAddress
        fields = '__all__'
