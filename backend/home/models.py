from django.conf import settings
from django.db import models
class Kudida(models.Model):
    'Generated Model'
    forty7 = models.BigIntegerField()
    w8 = models.GenericIPAddressField(protocol="both",unpack_ipv4=False,null=True,blank=True,)
    kurida = models.PositiveIntegerField(null=True,blank=True,)
