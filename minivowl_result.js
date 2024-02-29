var minivowlresult={
 "info": [
  {
   "description": "Created with pyowl2vowl (version 0.1) as part of the SPARQLing Unicorn QGIS Plugin"
  }
 ],
 "nodes": [
  {
   "name": "OghamStone",
   "type": "class",
   "uri": "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#OghamStone"
  },
  {
   "name": "3DModel",
   "type": "class",
   "uri": "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#3DModel"
  },
  {
   "name": "Annotation",
   "type": "class",
   "uri": "http://www.w3.org/ns/oa#Annotation"
  },
  {
   "name": "Polygon",
   "type": "class",
   "uri": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "name": "WKTSelector",
   "type": "class",
   "uri": "http://www.w3.org/ns/oa#WKTSelector"
  },
  {
   "name": "CartesianCS",
   "type": "class",
   "uri": "http://www.opengis.net/ont/crs/CartesianCS"
  },
  {
   "name": "CoordinateSystemAxis",
   "type": "class",
   "uri": "http://www.opengis.net/ont/crs/CoordinateSystemAxis"
  }
 ],
 "links": [
  {
   "source": 0,
   "target": 1,
   "valueTo": "3dmodel",
   "propertyTo": "class",
   "uriTo": "http://Research-Squirrel-Engineers.io/3dannotation_example/ont#3dmodel"
  },
  {
   "source": 3,
   "target": 5,
   "valueTo": "inSRS",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/geosparql#inSRS"
  },
  {
   "source": 4,
   "target": 5,
   "valueTo": "inSRS",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/geosparql#inSRS"
  },
  {
   "source": 5,
   "target": 6,
   "valueTo": "axis",
   "propertyTo": "class",
   "uriTo": "http://situx.github.io/proj4rdf/ont/crs/axis"
  }
 ]
}