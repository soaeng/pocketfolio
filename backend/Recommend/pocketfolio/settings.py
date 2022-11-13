from pathlib import Path
from dotenv import load_dotenv, find_dotenv
import os
from pathlib import Path


# Load environment variables
load_dotenv(find_dotenv())

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Django Secret key
DJANGO_SECRET = os.environ["DJANGO_SECRET"]


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = DJANGO_SECRET

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["k7e101.p.ssafy.io", "localhost", "127.0.0.1"]


# Application definition

INSTALLED_APPS = [
    # Local apps
    "recommendation.apps.RecommendationConfig",
    
    # Third party apps
    "rest_framework",
    "corsheaders",
    "drf_yasg",
    "djongo",
    
    # Django apps
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

MIDDLEWARE = [
    # CORS
    "corsheaders.middleware.CorsMiddleware",
    # Default middlewares
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

REST_FRAMEWORK = {
    "DEFAULT_PARSER_CLASSES": [
        "rest_framework.parsers.JSONParser",
    ]
}


ROOT_URLCONF = "pocketfolio.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "pocketfolio.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# Environment Variables
MYSQL_NAME = os.environ["MYSQL_NAME"]
MYSQL_HOST = os.environ["MYSQL_HOST"]
MYSQL_PORT = int(os.environ["MYSQL_PORT"])
MYSQL_USER = os.environ["MYSQL_USER"]
MYSQL_PASS = os.environ["MYSQL_PASS"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": MYSQL_NAME,
        "HOST": MYSQL_HOST,
        "PORT": MYSQL_PORT,
        "USER": MYSQL_USER,
        "PASSWORD": MYSQL_PASS,
        "OPTIONS": {
            "init_command": "SET sql_mode='STRICT_TRANS_TABLES'",
            "charset": "utf8",
            "use_unicode": True,
        },
    }
}

# DATABASES = {
#     "default": {
#         "ENGINE": "djongo",
#         "NAME": MONGO_NAME,
#         "ENFORCE_SCHEMA": False,
#         "CLIENT": {
#             "host": MONGO_HOST,
#             "port": MONGO_PORT,
#             "username": MONGO_USER,
#             "password": MONGO_PASS,
#         },
#         "LOGGING": {
#             "version": 1,
#             "loggers": {
#                 "djongo": {
#                     "level": "DEBUG",
#                     "propagate": False,
#                 }
#             },
#         },
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",},
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = "ko-kr"

TIME_ZONE = "Asia/Seoul"

USE_I18N = True

USE_TZ = True



# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = "static/"

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
