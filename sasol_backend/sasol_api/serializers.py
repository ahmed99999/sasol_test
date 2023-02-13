from rest_framework import serializers
from .models import Product


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'picture', 'price', 'active']


class ProductSerializer(serializers.ModelSerializer):
    temp_price = serializers.SerializerMethodField()

    # noinspection PyMethodMayBeStatic
    def get_temp_price(self, instance):
        return instance.getTempPrice()

    class Meta:
        model = Product
        fields = '__all__'
