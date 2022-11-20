from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, parser_classes
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from .serializers import UserSerializer
from .cbf import recomm


@swagger_auto_schema(methods=["get"], operation_description="get Test")
@api_view(["GET"])
def release_test(request):
    return JsonResponse({"test": "장고 배포 테스트 ing"}, status=status.HTTP_200_OK, safe=False, json_dumps_params={'ensure_ascii': False})


@swagger_auto_schema(methods=["post"], request_body=UserSerializer, operation_description="Create a post object")
@api_view(["POST"])
@parser_classes([JSONParser])
def recommend(request):
    data = request.data
    response = {"recomm": recomm(data["userSeq"])}
    return JsonResponse(response, status=status.HTTP_201_CREATED, safe=False)

