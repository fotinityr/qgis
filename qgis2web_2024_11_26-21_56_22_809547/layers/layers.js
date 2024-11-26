var wms_layers = [];

var lyr_IDWFTT_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "IDWFTT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IDWFTT_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2641753.712120, 4095434.095144, 2941665.534649, 4361307.459900]
                            })
                        });
var lyr_FTDEM2100_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "FTDEM2100",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FTDEM2100_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2594986.151914, 4121105.354180, 2959780.600053, 4301994.756866]
                            })
                        });
var format_Springscrete_gis_2 = new ol.format.GeoJSON();
var features_Springscrete_gis_2 = format_Springscrete_gis_2.readFeatures(json_Springscrete_gis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Springscrete_gis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Springscrete_gis_2.addFeatures(features_Springscrete_gis_2);
var lyr_Springscrete_gis_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Springscrete_gis_2, 
                style: style_Springscrete_gis_2,
                popuplayertitle: "Springscrete_gis",
                interactive: true,
                title: '<img src="styles/legend/Springscrete_gis_2.png" /> Springscrete_gis'
            });

lyr_IDWFTT_0.setVisible(true);lyr_FTDEM2100_1.setVisible(true);lyr_Springscrete_gis_2.setVisible(true);
var layersList = [lyr_IDWFTT_0,lyr_FTDEM2100_1,lyr_Springscrete_gis_2];
lyr_Springscrete_gis_2.set('fieldAliases', {'Station ID': 'Station ID', 'X coordinate': 'X coordinate', 'Y coordinate': 'Y coordinate', 'Elevation': 'Elevation', 'Temperature': 'Temperature', 'pH (field)': 'pH (field)', 'El. Cond.': 'El. Cond.', 'TDS': 'TDS', 'Ca': 'Ca', 'Mg': 'Mg', 'Na': 'Na', 'K': 'K', 'Cl': 'Cl', 'HCO3': 'HCO3', 'SO4': 'SO4', 'F': 'F', });
lyr_Springscrete_gis_2.set('fieldImages', {'Station ID': 'TextEdit', 'X coordinate': 'Range', 'Y coordinate': 'Range', 'Elevation': 'Range', 'Temperature': 'TextEdit', 'pH (field)': 'TextEdit', 'El. Cond.': 'TextEdit', 'TDS': 'TextEdit', 'Ca': 'TextEdit', 'Mg': 'TextEdit', 'Na': 'TextEdit', 'K': 'TextEdit', 'Cl': 'TextEdit', 'HCO3': 'TextEdit', 'SO4': 'TextEdit', 'F': 'TextEdit', });
lyr_Springscrete_gis_2.set('fieldLabels', {'Station ID': 'no label', 'X coordinate': 'no label', 'Y coordinate': 'no label', 'Elevation': 'no label', 'Temperature': 'no label', 'pH (field)': 'no label', 'El. Cond.': 'no label', 'TDS': 'no label', 'Ca': 'no label', 'Mg': 'no label', 'Na': 'no label', 'K': 'no label', 'Cl': 'no label', 'HCO3': 'no label', 'SO4': 'no label', 'F': 'no label', });
lyr_Springscrete_gis_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});