from rest_framework import serializers
from .models import ForexRate, Item, Payment

class ForexRateSerializers(serializers.ModelSerializer):

    class Meta:
        model = ForexRate
        fields = ('pk','from_currency', 'to_currency', 'amount', 'rate')


class PaymentSerializers(serializers.ModelSerializer):

    class Meta:
        model = Payment
        fields = '__all__'



class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
