from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from contracts.views import ContractModelViewSet, ConnectionAddressModelViewSet

router = DefaultRouter()
router.register('contracts', ContractModelViewSet)
router.register('address', ConnectionAddressModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
]
