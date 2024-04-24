var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PenutupLahan_1 = new ol.format.GeoJSON();
var features_PenutupLahan_1 = format_PenutupLahan_1.readFeatures(json_PenutupLahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenutupLahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenutupLahan_1.addFeatures(features_PenutupLahan_1);
var lyr_PenutupLahan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenutupLahan_1, 
                style: style_PenutupLahan_1,
                popuplayertitle: "Penutup Lahan",
                interactive: false,
    title: 'Penutup Lahan<br />\
    <img src="styles/legend/PenutupLahan_1_0.png" /> Bandara / Pelabuhan<br />\
    <img src="styles/legend/PenutupLahan_1_1.png" /> Belukar<br />\
    <img src="styles/legend/PenutupLahan_1_2.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/PenutupLahan_1_3.png" /> Hutan Tanaman<br />\
    <img src="styles/legend/PenutupLahan_1_4.png" /> Pemukiman<br />\
    <img src="styles/legend/PenutupLahan_1_5.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/PenutupLahan_1_6.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/PenutupLahan_1_7.png" /> Sawah<br />\
    <img src="styles/legend/PenutupLahan_1_8.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/PenutupLahan_1_9.png" /> Lahan Kosong<br />'
        });
var format_BatasAdministrasi_2 = new ol.format.GeoJSON();
var features_BatasAdministrasi_2 = format_BatasAdministrasi_2.readFeatures(json_BatasAdministrasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_2.addFeatures(features_BatasAdministrasi_2);
var lyr_BatasAdministrasi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasi_2, 
                style: style_BatasAdministrasi_2,
                popuplayertitle: "Batas Administrasi",
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_2.png" /> Batas Administrasi'
            });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_JalanProvinsi_4 = new ol.format.GeoJSON();
var features_JalanProvinsi_4 = format_JalanProvinsi_4.readFeatures(json_JalanProvinsi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanProvinsi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanProvinsi_4.addFeatures(features_JalanProvinsi_4);
var lyr_JalanProvinsi_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanProvinsi_4, 
                style: style_JalanProvinsi_4,
                popuplayertitle: "Jalan Provinsi",
                interactive: true,
                title: '<img src="styles/legend/JalanProvinsi_4.png" /> Jalan Provinsi'
            });
var format_JalanNasional_5 = new ol.format.GeoJSON();
var features_JalanNasional_5 = format_JalanNasional_5.readFeatures(json_JalanNasional_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanNasional_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanNasional_5.addFeatures(features_JalanNasional_5);
var lyr_JalanNasional_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanNasional_5, 
                style: style_JalanNasional_5,
                popuplayertitle: "Jalan Nasional",
                interactive: true,
                title: '<img src="styles/legend/JalanNasional_5.png" /> Jalan Nasional'
            });
var format_JalanKabupaten_6 = new ol.format.GeoJSON();
var features_JalanKabupaten_6 = format_JalanKabupaten_6.readFeatures(json_JalanKabupaten_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_6.addFeatures(features_JalanKabupaten_6);
var lyr_JalanKabupaten_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanKabupaten_6, 
                style: style_JalanKabupaten_6,
                popuplayertitle: "Jalan Kabupaten",
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_6.png" /> Jalan Kabupaten'
            });
var format_JaringanPersampahan_7 = new ol.format.GeoJSON();
var features_JaringanPersampahan_7 = format_JaringanPersampahan_7.readFeatures(json_JaringanPersampahan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanPersampahan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanPersampahan_7.addFeatures(features_JaringanPersampahan_7);
var lyr_JaringanPersampahan_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanPersampahan_7, 
                style: style_JaringanPersampahan_7,
                popuplayertitle: "Jaringan Persampahan",
                interactive: true,
                title: '<img src="styles/legend/JaringanPersampahan_7.png" /> Jaringan Persampahan'
            });
var format_Pemerintahan_8 = new ol.format.GeoJSON();
var features_Pemerintahan_8 = format_Pemerintahan_8.readFeatures(json_Pemerintahan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_8.addFeatures(features_Pemerintahan_8);
var lyr_Pemerintahan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemerintahan_8, 
                style: style_Pemerintahan_8,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_8.png" /> Pemerintahan'
            });

lyr_OSM_0.setVisible(true);lyr_PenutupLahan_1.setVisible(true);lyr_BatasAdministrasi_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_JalanProvinsi_4.setVisible(true);lyr_JalanNasional_5.setVisible(true);lyr_JalanKabupaten_6.setVisible(true);lyr_JaringanPersampahan_7.setVisible(true);lyr_Pemerintahan_8.setVisible(true);
var layersList = [lyr_OSM_0,lyr_PenutupLahan_1,lyr_BatasAdministrasi_2,lyr_Sungai_3,lyr_JalanProvinsi_4,lyr_JalanNasional_5,lyr_JalanKabupaten_6,lyr_JaringanPersampahan_7,lyr_Pemerintahan_8];
lyr_PenutupLahan_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', });
lyr_BatasAdministrasi_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Kalurahan': 'Kalurahan', 'Kapanewon': 'Kapanewon', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'Luas': 'Luas', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Sumber': 'Sumber', });
lyr_Sungai_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LAYER': 'LAYER', 'KETERANGAN': 'KETERANGAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_JalanProvinsi_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatId1': 'FeatId1', 'Kl_Dat_Das': 'Kl_Dat_Das', 'Nm_Ruas': 'Nm_Ruas', 'Status': 'Status', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Ura_Dukung': 'Ura_Dukung', 'Kd_Bd_PU': 'Kd_Bd_PU', 'Kd_Jns_Inf': 'Kd_Jns_Inf', 'Kd_Inf': 'Kd_Inf', 'Provinsi': 'Provinsi', 'Kab_Kot': 'Kab_Kot', 'Kecamatan': 'Kecamatan', 'Desa_Kel': 'Desa_Kel', 'Ruas_Aw': 'Ruas_Aw', 'Ruas_Ak': 'Ruas_Ak', 'Kd_Patok': 'Kd_Patok', 'Km_Awal': 'Km_Awal', 'Km_Akhir': 'Km_Akhir', 'Nm_Lintas': 'Nm_Lintas', 'Panjang': 'Panjang', 'Lbr_Keras': 'Lbr_Keras', 'Tipe_JLN': 'Tipe_JLN', 'Tanah_Kri': 'Tanah_Kri', 'MACADAM': 'MACADAM', 'Aspal': 'Aspal', 'Rigid': 'Rigid', 'Koord_X_Aw': 'Koord_X_Aw', 'Koord_Y_Aw': 'Koord_Y_Aw', 'Koord_X_Ak': 'Koord_X_Ak', 'Koord_Y_Ak': 'Koord_Y_Ak', 'REMARK': 'REMARK', 'Kon_Baik': 'Kon_Baik', 'Kon_Sdg': 'Kon_Sdg', 'Kon_Rgn': 'Kon_Rgn', 'Kon_Rusak': 'Kon_Rusak', 'Kon_Mntp': 'Kon_Mntp', 'Kon_T_Mntp': 'Kon_T_Mntp', 'Shape_Leng': 'Shape_Leng', });
lyr_JalanNasional_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'kd_ruas': 'kd_ruas', 'nm_ruas': 'nm_ruas', 'status': 'status', 'fungsi': 'fungsi', 'provinsi': 'provinsi', 'panjang': 'panjang', 'kd_prov': 'kd_prov', 'x_awal': 'x_awal', 'y_awal': 'y_awal', 'x_akhir': 'x_akhir', 'y_akhir': 'y_akhir', 'nm_lintas': 'nm_lintas', 'nm_lintas2': 'nm_lintas2', 'Kab_Kot': 'Kab_Kot', 'B_km202': 'B_km202', 'B_ps202': 'B_ps202', 'S_km202': 'S_km202', 'S_ps202': 'S_ps202', 'RR_km202': 'RR_km202', 'RR_ps202': 'RR_ps202', 'RB_km202': 'RB_km202', 'RB_ps202': 'RB_ps202', 'Mtp_KM202': 'Mtp_KM202', 'Mtp_PS202': 'Mtp_PS202', 'Tmt_KM202': 'Tmt_KM202', 'Tmt_PS202': 'Tmt_PS202', 'IRI_20202': 'IRI_20202', 'LEBAR_A20': 'LEBAR_A20', 'LEBAR_B20': 'LEBAR_B20', 'LEBAR_C20': 'LEBAR_C20', 'LEBAR_D20': 'LEBAR_D20', 'LEBAR_E20': 'LEBAR_E20', 'LEBAR_F20': 'LEBAR_F20', 'LEBARAVG20': 'LEBARAVG20', 'Tanah_20': 'Tanah_20', 'Aspal_20': 'Aspal_20', 'Rigid_20': 'Rigid_20', 'AADT_TOT20': 'AADT_TOT20', 'Veh1_20': 'Veh1_20', 'Veh2_20': 'Veh2_20', 'Veh3_20': 'Veh3_20', 'Veh4_20': 'Veh4_20', 'Veh5a_20': 'Veh5a_20', 'Veh5b_20': 'Veh5b_20', 'Veh6a_20': 'Veh6a_20', 'Veh6b_20': 'Veh6b_20', 'Veh7a_20': 'Veh7a_20', 'Veh7b_20': 'Veh7b_20', 'Veh7c_20': 'Veh7c_20', 'VDF_20': 'VDF_20', 'CESA_20': 'CESA_20', 'satker2021': 'satker2021', 'PPK_2021': 'PPK_2021', 'BALAI_2021': 'BALAI_2021', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_JalanKabupaten_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Panjang_m': 'Panjang_m', 'Sumber': 'Sumber', 'Fungsi': 'Fungsi', 'Status': 'Status', 'Nama': 'Nama', });
lyr_JaringanPersampahan_7.set('fieldAliases', {'fid': 'fid', 'No': 'No', 'Jenis_Fasi': 'Jenis_Fasi', 'Nama_Fasil': 'Nama_Fasil', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Kapanewon': 'Kapanewon', 'Kabupaten': 'Kabupaten', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_Pemerintahan_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PenutupLahan_1.set('fieldImages', {'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', });
lyr_BatasAdministrasi_2.set('fieldImages', {'fid': 'Range', 'OBJECTID': 'TextEdit', 'Kalurahan': 'TextEdit', 'Kapanewon': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'Luas': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_Sungai_3.set('fieldImages', {'OBJECTID': 'Range', 'LAYER': 'TextEdit', 'KETERANGAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_JalanProvinsi_4.set('fieldImages', {'fid': 'Range', 'OBJECTID': 'TextEdit', 'FeatId1': 'TextEdit', 'Kl_Dat_Das': 'TextEdit', 'Nm_Ruas': 'TextEdit', 'Status': 'TextEdit', 'Fungsi': 'TextEdit', 'Mendukung': 'TextEdit', 'Ura_Dukung': 'TextEdit', 'Kd_Bd_PU': 'TextEdit', 'Kd_Jns_Inf': 'TextEdit', 'Kd_Inf': 'TextEdit', 'Provinsi': 'TextEdit', 'Kab_Kot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa_Kel': 'TextEdit', 'Ruas_Aw': 'TextEdit', 'Ruas_Ak': 'TextEdit', 'Kd_Patok': 'TextEdit', 'Km_Awal': 'TextEdit', 'Km_Akhir': 'TextEdit', 'Nm_Lintas': 'TextEdit', 'Panjang': 'TextEdit', 'Lbr_Keras': 'TextEdit', 'Tipe_JLN': 'TextEdit', 'Tanah_Kri': 'TextEdit', 'MACADAM': 'TextEdit', 'Aspal': 'TextEdit', 'Rigid': 'TextEdit', 'Koord_X_Aw': 'TextEdit', 'Koord_Y_Aw': 'TextEdit', 'Koord_X_Ak': 'TextEdit', 'Koord_Y_Ak': 'TextEdit', 'REMARK': 'TextEdit', 'Kon_Baik': 'TextEdit', 'Kon_Sdg': 'TextEdit', 'Kon_Rgn': 'TextEdit', 'Kon_Rusak': 'TextEdit', 'Kon_Mntp': 'TextEdit', 'Kon_T_Mntp': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_JalanNasional_5.set('fieldImages', {'fid': 'Range', 'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'kd_ruas': 'TextEdit', 'nm_ruas': 'TextEdit', 'status': 'TextEdit', 'fungsi': 'TextEdit', 'provinsi': 'TextEdit', 'panjang': 'TextEdit', 'kd_prov': 'TextEdit', 'x_awal': 'TextEdit', 'y_awal': 'TextEdit', 'x_akhir': 'TextEdit', 'y_akhir': 'TextEdit', 'nm_lintas': 'TextEdit', 'nm_lintas2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'B_km202': 'TextEdit', 'B_ps202': 'TextEdit', 'S_km202': 'TextEdit', 'S_ps202': 'TextEdit', 'RR_km202': 'TextEdit', 'RR_ps202': 'TextEdit', 'RB_km202': 'TextEdit', 'RB_ps202': 'TextEdit', 'Mtp_KM202': 'TextEdit', 'Mtp_PS202': 'TextEdit', 'Tmt_KM202': 'TextEdit', 'Tmt_PS202': 'TextEdit', 'IRI_20202': 'TextEdit', 'LEBAR_A20': 'TextEdit', 'LEBAR_B20': 'TextEdit', 'LEBAR_C20': 'TextEdit', 'LEBAR_D20': 'TextEdit', 'LEBAR_E20': 'TextEdit', 'LEBAR_F20': 'TextEdit', 'LEBARAVG20': 'TextEdit', 'Tanah_20': 'TextEdit', 'Aspal_20': 'TextEdit', 'Rigid_20': 'TextEdit', 'AADT_TOT20': 'TextEdit', 'Veh1_20': 'TextEdit', 'Veh2_20': 'TextEdit', 'Veh3_20': 'TextEdit', 'Veh4_20': 'TextEdit', 'Veh5a_20': 'TextEdit', 'Veh5b_20': 'TextEdit', 'Veh6a_20': 'TextEdit', 'Veh6b_20': 'TextEdit', 'Veh7a_20': 'TextEdit', 'Veh7b_20': 'TextEdit', 'Veh7c_20': 'TextEdit', 'VDF_20': 'TextEdit', 'CESA_20': 'TextEdit', 'satker2021': 'TextEdit', 'PPK_2021': 'TextEdit', 'BALAI_2021': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_JalanKabupaten_6.set('fieldImages', {'fid': 'Range', 'OBJECTID': 'TextEdit', 'Panjang_m': 'TextEdit', 'Sumber': 'TextEdit', 'Fungsi': 'TextEdit', 'Status': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JaringanPersampahan_7.set('fieldImages', {'fid': 'Range', 'No': 'TextEdit', 'Jenis_Fasi': 'TextEdit', 'Nama_Fasil': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Kapanewon': 'TextEdit', 'Kabupaten': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_Pemerintahan_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PenutupLahan_1.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'NAME': 'hidden field', 'Provinsi': 'hidden field', 'PL_19_R': 'hidden field', 'Legenda': 'hidden field', });
lyr_BatasAdministrasi_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Kalurahan': 'inline label - always visible', 'Kapanewon': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Luas': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Sumber': 'hidden field', });
lyr_Sungai_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'LAYER': 'hidden field', 'KETERANGAN': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', });
lyr_JalanProvinsi_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FeatId1': 'hidden field', 'Kl_Dat_Das': 'hidden field', 'Nm_Ruas': 'no label', 'Status': 'hidden field', 'Fungsi': 'hidden field', 'Mendukung': 'hidden field', 'Ura_Dukung': 'hidden field', 'Kd_Bd_PU': 'hidden field', 'Kd_Jns_Inf': 'hidden field', 'Kd_Inf': 'hidden field', 'Provinsi': 'hidden field', 'Kab_Kot': 'hidden field', 'Kecamatan': 'hidden field', 'Desa_Kel': 'hidden field', 'Ruas_Aw': 'hidden field', 'Ruas_Ak': 'hidden field', 'Kd_Patok': 'hidden field', 'Km_Awal': 'hidden field', 'Km_Akhir': 'hidden field', 'Nm_Lintas': 'hidden field', 'Panjang': 'hidden field', 'Lbr_Keras': 'hidden field', 'Tipe_JLN': 'hidden field', 'Tanah_Kri': 'hidden field', 'MACADAM': 'hidden field', 'Aspal': 'hidden field', 'Rigid': 'hidden field', 'Koord_X_Aw': 'hidden field', 'Koord_Y_Aw': 'hidden field', 'Koord_X_Ak': 'hidden field', 'Koord_Y_Ak': 'hidden field', 'REMARK': 'hidden field', 'Kon_Baik': 'hidden field', 'Kon_Sdg': 'hidden field', 'Kon_Rgn': 'hidden field', 'Kon_Rusak': 'hidden field', 'Kon_Mntp': 'hidden field', 'Kon_T_Mntp': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_JalanNasional_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'kd_ruas': 'hidden field', 'nm_ruas': 'no label', 'status': 'hidden field', 'fungsi': 'hidden field', 'provinsi': 'hidden field', 'panjang': 'hidden field', 'kd_prov': 'hidden field', 'x_awal': 'hidden field', 'y_awal': 'hidden field', 'x_akhir': 'hidden field', 'y_akhir': 'hidden field', 'nm_lintas': 'hidden field', 'nm_lintas2': 'hidden field', 'Kab_Kot': 'hidden field', 'B_km202': 'hidden field', 'B_ps202': 'hidden field', 'S_km202': 'hidden field', 'S_ps202': 'hidden field', 'RR_km202': 'hidden field', 'RR_ps202': 'hidden field', 'RB_km202': 'hidden field', 'RB_ps202': 'hidden field', 'Mtp_KM202': 'hidden field', 'Mtp_PS202': 'hidden field', 'Tmt_KM202': 'hidden field', 'Tmt_PS202': 'hidden field', 'IRI_20202': 'hidden field', 'LEBAR_A20': 'hidden field', 'LEBAR_B20': 'hidden field', 'LEBAR_C20': 'hidden field', 'LEBAR_D20': 'hidden field', 'LEBAR_E20': 'hidden field', 'LEBAR_F20': 'hidden field', 'LEBARAVG20': 'hidden field', 'Tanah_20': 'hidden field', 'Aspal_20': 'hidden field', 'Rigid_20': 'hidden field', 'AADT_TOT20': 'hidden field', 'Veh1_20': 'hidden field', 'Veh2_20': 'hidden field', 'Veh3_20': 'hidden field', 'Veh4_20': 'hidden field', 'Veh5a_20': 'hidden field', 'Veh5b_20': 'hidden field', 'Veh6a_20': 'hidden field', 'Veh6b_20': 'hidden field', 'Veh7a_20': 'hidden field', 'Veh7b_20': 'hidden field', 'Veh7c_20': 'hidden field', 'VDF_20': 'hidden field', 'CESA_20': 'hidden field', 'satker2021': 'hidden field', 'PPK_2021': 'hidden field', 'BALAI_2021': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', });
lyr_JalanKabupaten_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Panjang_m': 'hidden field', 'Sumber': 'hidden field', 'Fungsi': 'hidden field', 'Status': 'hidden field', 'Nama': 'no label', });
lyr_JaringanPersampahan_7.set('fieldLabels', {'fid': 'hidden field', 'No': 'hidden field', 'Jenis_Fasi': 'hidden field', 'Nama_Fasil': 'no label', 'Alamat': 'inline label - always visible', 'Kalurahan': 'inline label - always visible', 'Kapanewon': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', });
lyr_Pemerintahan_8.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FGSGOV': 'hidden field', 'LUAS': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'no label', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', });
lyr_Pemerintahan_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});