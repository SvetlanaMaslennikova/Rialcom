from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Contract(models.Model):
    last_name = models.CharField(max_length=64, verbose_name='Фамилия')
    first_name = models.CharField(max_length=64, verbose_name='Имя')
    surname = models.CharField(max_length=64, verbose_name='Отчество')
    created_date = models.DateField(auto_now_add=True, verbose_name='Дата создания')
    conclusion_date = models.DateField(auto_now_add=True, verbose_name='Дата заключения')
    phone = PhoneNumberField(unique=True, null=False, blank=False, verbose_name='Телефон')
    email = models.EmailField(max_length=254, blank=True, verbose_name='Email')
    address = models.ForeignKey(
        'ConnectionAddress',
        on_delete=models.CASCADE,
    )

    class Meta:
        verbose_name = 'Договор'
        verbose_name_plural = 'Договора'


class ConnectionAddress(models.Model):
    city = models.CharField(max_length=60, verbose_name='Город')
    street = models.CharField(max_length=60, verbose_name='Улица')
    house = models.CharField(max_length=30, verbose_name='Дом')
    connection_date = models.DateField(auto_now_add=True, verbose_name='Дата подключения')
    blackout_date = models.DateField(auto_now_add=True, verbose_name='Дата отключения')

    class Meta:
        verbose_name = 'Адрес подключения'
        verbose_name_plural = 'Адреса подключения'

