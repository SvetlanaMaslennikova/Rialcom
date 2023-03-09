from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import Contract, Address


class AddressModelSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Address
        fields = '__all__'


class ContractModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'
