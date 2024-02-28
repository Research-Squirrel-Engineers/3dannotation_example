var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/ogham_stone",
        "parent": "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#OghamStone",
        "type": "instance",
        "text": "Ogham Stone (data:ogham_stone)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/Tullaherin_II",
        "parent": "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#OghamStone",
        "type": "instance",
        "text": "Tullaherin_II (data:Tullaherin_II)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#OghamStone",
        "parent": "#",
        "type": "class",
        "text": "OghamStone (ont:OghamStone) [2]",
        "data": {
          "to": {
            "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#3dmodel": {
              "instancecount": 1,
              "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#3DModel": 1
            },
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/ogham_stone_3dmodel",
        "parent": "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#3DModel",
        "type": "instance",
        "text": "3D Model of Ogham Stone (data:ogham_stone_3dmodel)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/Tullaherin_II_3dmodel",
        "parent": "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#3DModel",
        "type": "instance",
        "text": "3D Model of Tullaherin_II (data:Tullaherin_II_3dmodel)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#3DModel",
        "parent": "#",
        "type": "class",
        "text": "3DModel (ont:3DModel) [2]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://xmlns.com/foaf/0.1/image": {
              "instancecount": 1
            }
          },
          "from": {
            "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#3dmodel": {
              "instancecount": 0,
              "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#OghamStone": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/ogham_stone_3dmodel_crossanno",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of a cross on I-KER-062.obj (data:ogham_stone_3dmodel_crossanno)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/Tullaherin_II_3dmodel_dt_anno",
        "parent": "http://www.w3.org/ns/oa#Annotation",
        "type": "instance",
        "text": "Annotation of a cross on I-KER-062.obj (data:Tullaherin_II_3dmodel_dt_anno)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#Annotation",
        "parent": "#",
        "type": "class",
        "text": "Annotation (oa:Annotation) [2]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/oa#hasBody": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/oa#hasTarget": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 5
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/ogham_stone_3dmodel_crossanno_target_selector_suniv0_",
        "parent": "http://www.opengis.net/ont/sf#Polygon",
        "type": "instance",
        "text": "Annotation target selector of a cross on I-KER-062.obj (data:ogham_stone_3dmodel_crossanno_target_selector)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/Tullaherin_II_3dmodel_dt_anno_target_selector_suniv0_",
        "parent": "http://www.opengis.net/ont/sf#Polygon",
        "type": "instance",
        "text": "Annotation target selector of a cross on I-KER-062.obj (data:Tullaherin_II_3dmodel_dt_anno_target_selector)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#Polygon",
        "parent": "#",
        "type": "class",
        "text": "Polygon (sf:Polygon) [2]",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/ogham_stone_3dmodel_crossanno_target_selector_suniv1_",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "Annotation target selector of a cross on I-KER-062.obj (data:ogham_stone_3dmodel_crossanno_target_selector)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/Tullaherin_II_3dmodel_dt_anno_target_selector_suniv1_",
        "parent": "http://www.w3.org/ns/oa#WKTSelector",
        "type": "instance",
        "text": "Annotation target selector of a cross on I-KER-062.obj (data:Tullaherin_II_3dmodel_dt_anno_target_selector)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/oa#WKTSelector",
        "parent": "#",
        "type": "class",
        "text": "WKTSelector (oa:WKTSelector) [2]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.opengis.net/ont/geosparql#inSRS": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#value": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#definition": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#GeometryCollection": 1,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            },
            "http://www.w3.org/ns/oa#hasSelector": {
              "instancecount": 0
            }
          }
        },
        "instancecount": 7
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/cartesian_ax3_mm",
        "parent": "http://www.opengis.net/ont/crs/CartesianCS",
        "type": "instance",
        "text": "Cartesian coordinate system with 3 axis in millimetre units (data:cartesian_ax3_mm)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/crs/CartesianCS",
        "parent": "#",
        "type": "class",
        "text": "CartesianCS (geocrs:CartesianCS) [1]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://situx.github.io/proj4rdf/ont/crs/asSVG": {
              "instancecount": 1
            },
            "http://situx.github.io/proj4rdf/ont/crs/asWKT": {
              "instancecount": 1
            },
            "http://situx.github.io/proj4rdf/ont/crs/axis": {
              "instancecount": 3,
              "http://www.opengis.net/ont/crs/CoordinateSystemAxis": 2
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 8
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/cartesian_ax3_mm_axis1",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Cartesian coordinate system with 3 axis in millimetre units: Axis 1 (data:cartesian_ax3_mm_axis1)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/cartesian_ax3_mm_axis2",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Cartesian coordinate system with 3 axis in millimetre units: Axis 2 (data:cartesian_ax3_mm_axis2)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#cartesian_ax3_mm_axis3",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Cartesian coordinate system with 3 axis in millimetre units: Axis 3 (ont:cartesian_ax3_mm_axis3)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "parent": "#",
        "type": "class",
        "text": "CoordinateSystemAxis (geocrs:CoordinateSystemAxis) [3]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://situx.github.io/proj4rdf/ont/crs/abbreviation": {
              "instancecount": 1
            },
            "http://situx.github.io/proj4rdf/ont/crs/axisDirection": {
              "instancecount": 1
            },
            "http://situx.github.io/proj4rdf/ont/crs/axisOrder": {
              "instancecount": 1
            },
            "http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/crs/abbreviation": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/crs/axisDirection": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/crs/axisOrder": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 10
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/OghamStone_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "OghamStone Instances Collection (data:OghamStone_collection)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/3DModel_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "3DModel Instances Collection (data:3DModel_collection)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/Annotation_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Annotation Instances Collection (data:Annotation_collection)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/WKTSelector_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "WKTSelector Instances Collection (data:WKTSelector_collection)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/CartesianCS_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "CartesianCS Instances Collection (data:CartesianCS_collection)",
        "data": {}
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/CoordinateSystemAxis_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "CoordinateSystemAxis Instances Collection (data:CoordinateSystemAxis_collection)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Collection",
        "parent": "#",
        "type": "collectionclass",
        "text": "Collection (skos:Collection) [6]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 2,
              "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#3DModel": 2
            }
          },
          "from": {}
        },
        "instancecount": 6
      },
      {
        "id": "http://Research-Squirrel-Engineers.io/3dannotation_example/Polygon_collection",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "instance",
        "text": "Polygon Instances Collection (data:Polygon_collection)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "GeometryCollection (gsp:GeometryCollection) [1]",
        "data": {
          "to": {
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1,
              "http://www.w3.org/ns/adms#Asset": 1,
              "http://rdfs.org/ns/void#Dataset": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 2,
              "http://www.opengis.net/ont/sf#Polygon": 2,
              "http://www.w3.org/ns/oa#WKTSelector": 2
            }
          },
          "from": {}
        },
        "instancecount": 6
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "parent": "#",
        "type": "collectionclass",
        "text": "SpatialObjectCollection (gsp:SpatialObjectCollection)",
        "data": {}
      }
    ]
  },
  "@context": {
    "@version": 1.1,
    "foaf": "http://xmlns.com/foaf/0.1/",
    "ct": "http://purl.org/vocab/classtree/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "icon": "foaf:image",
    "id": "@id",
    "parent": "rdfs:subClassOf",
    "halfgeoclass": "ct:HalfGeoClass",
    "geoclass": {
      "@type": "ct:icontype",
      "@id": "ct:GeoClass"
    },
    "collectionclass": {
      "@type": "ct:icontype",
      "@id": "ct:CollectionClass"
    },
    "featurecollectionclass": {
      "@type": "ct:icontype",
      "@id": "ct:FeatureCollectionClass"
    },
    "class": "owl:Class",
    "instance": "owl:NamedIndividual",
    "geoinstance": {
      "@type": "ct:Icontype",
      "@id": "ct:GeoNamedIndividual"
    },
    "text": "rdfs:label",
    "type": "ct:icontype",
    "types": "ct:icontypes",
    "core": {
      "@type": "ct:TreeConfig",
      "@id": "@nest"
    },
    "data": {
      "@id": "ct:treeitem",
      "@type": "ct:TreeItem"
    }
  }
}