"""
V2 Sniper Master Configuration: The "Known Good" Production Track
Only contains targets verified to return successful XML scrapes.
"""

TARGET_SOURCES = {
    "Data_Engineering_and_Math": {
        "Polars": {
            "sitemap_url": "https://docs.pola.rs/sitemap.xml",
            "must_include": "docs.pola.rs/",
            "must_exclude": ["/development/"]
        },
        "Dask": {
            "sitemap_url": "https://docs.dask.org/sitemap.xml",
            "must_include": "/en/stable/",
            "must_exclude": ["/en/latest/"]
        },
        "Statsmodels": {
            "sitemap_url": "https://www.statsmodels.org/stable/sitemap.xml",
            "must_include": "/stable/",
            "must_exclude": ["/dev/"]
        }
    },

    "Machine_Learning_Core": {
        "XGBoost": {
            "sitemap_url": "https://xgboost.readthedocs.io/sitemap.xml",
            "must_include": "/en/stable/",
            "must_exclude": ["/en/latest/", "/tutorials/"]
        },
        "LightGBM": {
            "sitemap_url": "https://lightgbm.readthedocs.io/sitemap.xml",
            "must_include": "/en/stable/",
            "must_exclude": ["/en/latest/"]
        },
        "Optuna": {
            "sitemap_url": "https://optuna.readthedocs.io/sitemap.xml",
            "must_include": "/en/stable/",
            "must_exclude": ["/en/latest/"]
        }
    },
    
    "Deep_Learning": {
        "PyTorch": {
            "sitemap_url": "https://pytorch.org/sitemap.xml",
            "must_include": "/stable/",
            "must_exclude": ["/_modules/", "/master/", "/1."]
        },
        "TensorFlow": {
            "sitemap_url": "https://www.tensorflow.org/sitemap.xml",
            "must_include": "/api_docs/python/tf/",
            "must_exclude": ["/js/", "/lite/", "/jvm/", "/swift/"]
        },
        "Keras": {
            "sitemap_url": "https://keras.io/sitemap.xml",
            "must_include": "keras.io/",
            "must_exclude": ["/zh/", "/api/keras_nlp/"] 
        },
        "JAX": {
            "sitemap_url": "https://jax.readthedocs.io/sitemap.xml",
            "must_include": "/en/latest/",
            "must_exclude": ["/developer/"]
        },
        "FastAI": {
            "sitemap_url": "https://docs.fast.ai/sitemap.xml",
            "must_include": "docs.fast.ai/",
            "must_exclude": ["/dev/"]
        }
    },
    
    "NLP_and_LLMs": {
        "vLLM": {
            "sitemap_url": "https://docs.vllm.ai/en/latest/sitemap.xml",
            "must_include": "/en/latest/",
            "must_exclude": ["/dev/"]
        },
        "SpaCy": {
            "sitemap_url": "https://spacy.io/sitemap.xml",
            "must_include": "spacy.io/api/",
            "must_exclude": ["/universe/"]
        },
        "Cohere": {
            "sitemap_url": "https://docs.cohere.com/sitemap.xml",
            "must_include": "docs.cohere.com/docs/",
            "must_exclude": ["/v1/"]
        }
    },
    
    "Computer_Vision": {
        "Ultralytics_YOLO": {
            "sitemap_url": "https://docs.ultralytics.com/sitemap.xml",
            "must_include": "docs.ultralytics.com/",
            "must_exclude": ["/zh/", "/ko/", "/ja/", "/ru/", "/es/", "/fr/", "/de/"]
        },
        "Albumentations": {
            "sitemap_url": "https://albumentations.ai/sitemap.xml",
            "must_include": "albumentations.ai/docs/",
            "must_exclude": ["/ru/"]
        }
    },
    
    "Vector_Databases": {
        "Pinecone": {
            "sitemap_url": "https://docs.pinecone.io/sitemap.xml",
            "must_include": "docs.pinecone.io/",
            "must_exclude": ["/tags/", "/changelog/"]
        },
        "Chroma": {
            "sitemap_url": "https://docs.trychroma.com/sitemap.xml",
            "must_include": "docs.trychroma.com/",
            "must_exclude": ["/telemetry"]
        },
        "Qdrant": {
            "sitemap_url": "https://qdrant.tech/sitemap.xml",
            "must_include": "qdrant.tech/documentation/",
            "must_exclude": ["/articles/"]
        }
    },

    "Deployment_and_MLOps": {
        "FastAPI": {
            "sitemap_url": "https://fastapi.tiangolo.com/sitemap.xml",
            "must_include": "fastapi.tiangolo.com/",
            "must_exclude": ["/zh/", "/es/", "/ja/", "/pt/", "/ru/", "/de/", "/fr/", "/he/", "/tr/", "/ko/", "/release-notes/"]
        },
        "Streamlit": {
            "sitemap_url": "https://docs.streamlit.io/sitemap.xml",
            "must_include": "docs.streamlit.io/",
            "must_exclude": ["/develop/", "/knowledge-base/"]
        },
        "Docker": {
            "sitemap_url": "https://docs.docker.com/sitemap.xml",
            "must_include": "docs.docker.com/",
            "must_exclude": ["/mac/", "/windows/", "/engine/deprecated/"]
        },
        "Kubernetes": {
            "sitemap_url": "https://kubernetes.io/sitemap.xml",
            "must_include": "kubernetes.io/docs/",
            "must_exclude": ["/zh/", "/ko/", "/ja/", "/fr/", "/es/", "/pt-br/", "/id/"]
        },
        "MLflow": {
            "sitemap_url": "https://mlflow.org/docs/latest/sitemap.xml",
            "must_include": "/latest/",
            "must_exclude": ["/2."] 
        },
        "ZenML": {
            "sitemap_url": "https://docs.zenml.io/sitemap.xml",
            "must_include": "docs.zenml.io/",
            "must_exclude": ["/changelog"]
        }
    },

    "Languages_and_Core_Frameworks": {
        "NextJS": {
            "sitemap_url": "https://nextjs.org/sitemap.xml",
            "must_include": "nextjs.org/docs/",
            "must_exclude": ["/architecture/", "/blog/"]
        }
    }
}