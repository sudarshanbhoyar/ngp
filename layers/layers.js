var wms_layers = [];


        var lyr_EsriNationalGeographic_0 = new ol.layer.Tile({
            'title': 'Esri National Geographic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_CartoDbDarkMatter_1 = new ol.layer.Tile({
            'title': 'CartoDb Dark Matter',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var lyr_MH_Nagpur_lulc_v2_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "sisdpv2:MH_Nagpur_lulc_v2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MH_Nagpur_lulc_v2",
                            opacity: 0.806000,
                            
                            
                          });
              wms_layers.push([lyr_MH_Nagpur_lulc_v2_2, 0]);

lyr_EsriNationalGeographic_0.setVisible(true);lyr_CartoDbDarkMatter_1.setVisible(true);lyr_MH_Nagpur_lulc_v2_2.setVisible(true);
var layersList = [lyr_EsriNationalGeographic_0,lyr_CartoDbDarkMatter_1,lyr_MH_Nagpur_lulc_v2_2];
