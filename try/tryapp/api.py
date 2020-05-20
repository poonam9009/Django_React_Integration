from tryapp.models import Leads
from rest_framework import viewsets,permissions
from .serializers import LeadSerializer
from rest_framework.response import Response


class LeadsViewset(viewsets.ModelViewSet):
        queryset = Leads.objects.all()
        permission_classes = [
            permissions.AllowAny
        ]
        serializer_class  =  LeadSerializer
