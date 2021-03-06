var dataWorld = {
    "af": "16.63",
    "al": "11.58",
    "dz": "158.97",
    "ao": "85.81",
    "ag": "1.1",
    "ar": "351.02",
    "am": "8.83",
    "au": "1219.72",
    "at": "366.26",
    "az": "52.17",
    "bs": "7.54",
    "bh": "21.73",
    "bd": "105.4",
    "bb": "3.96",
    "by": "52.89",
    "be": "461.33",
    "bz": "1.43",
    "bj": "6.49",
    "bt": "1.4",
    "bo": "19.18",
    "ba": "16.2",
    "bw": "12.5",
    "br": "2023.53",
    "bn": "11.96",
    "bg": "44.84",
    "bf": "8.67",
    "bi": "1.47",
    "kh": "11.36",
    "cm": "21.88",
    "ca": "1563.66",
    "cv": "1.57",
    "cf": "2.11",
    "td": "7.59",
    "cl": "199.18",
    "cn": "5745.13",
    "co": "283.11",
    "km": "0.56",
    "cd": "12.6",
    "cg": "11.88",
    "cr": "35.02",
    "ci": "22.38",
    "hr": "59.92",
    "cy": "22.75",
    "cz": "195.23",
    "dk": "304.56",
    "dj": "1.14",
    "dm": "0.38",
    "do": "50.87",
    "ec": "61.49",
    "eg": "216.83",
    "sv": "21.8",
    "gq": "14.55",
    "er": "2.25",
    "ee": "19.22",
    "et": "30.94",
    "fj": "3.15",
    "fi": "231.98",
    "fr": "2555.44",
    "ga": "12.56",
    "gm": "1.04",
    "ge": "11.23",
    "de": "3305.9",
    "gh": "18.06",
    "gr": "305.01",
    "gd": "0.65",
    "gt": "40.77",
    "gn": "4.34",
    "gw": "0.83",
    "gy": "2.2",
    "ht": "6.5",
    "hn": "15.34",
    "hk": "226.49",
    "hu": "132.28",
    "is": "12.77",
    "in": "1430.02",
    "id": "695.06",
    "ir": "337.9",
    "iq": "84.14",
    "ie": "204.14",
    "il": "201.25",
    "it": "2036.69",
    "jm": "13.74",
    "jp": "5390.9",
    "jo": "27.13",
    "kz": "129.76",
    "ke": "32.42",
    "ki": "0.15",
    "kr": "986.26",
    "undefined": "5.73",
    "kw": "117.32",
    "kg": "4.44",
    "la": "6.34",
    "lv": "23.39",
    "lb": "39.15",
    "ls": "1.8",
    "lr": "0.98",
    "ly": "77.91",
    "lt": "35.73",
    "lu": "52.43",
    "mk": "9.58",
    "mg": "8.33",
    "mw": "5.04",
    "my": "218.95",
    "mv": "1.43",
    "ml": "9.08",
    "mt": "7.8",
    "mr": "3.49",
    "mu": "9.43",
    "mx": "1004.04",
    "md": "5.36",
    "mn": "5.81",
    "me": "3.88",
    "ma": "91.7",
    "mz": "10.21",
    "mm": "35.65",
    "na": "11.45",
    "np": "15.11",
    "nl": "770.31",
    "nz": "138",
    "ni": "6.38",
    "ne": "5.6",
    "ng": "206.66",
    "no": "413.51",
    "om": "53.78",
    "pk": "174.79",
    "pa": "27.2",
    "pg": "8.81",
    "py": "17.17",
    "pe": "153.55",
    "ph": "189.06",
    "pl": "438.88",
    "pt": "223.7",
    "qa": "126.52",
    "ro": "158.39",
    "ru": "1476.91",
    "rw": "5.69",
    "ws": "0.55",
    "st": "0.19",
    "sa": "434.44",
    "sn": "12.66",
    "rs": "38.92",
    "sc": "0.92",
    "sl": "1.9",
    "sg": "217.38",
    "sk": "86.26",
    "si": "46.44",
    "sb": "0.67",
    "za": "354.41",
    "es": "1374.78",
    "lk": "48.24",
    "kn": "0.56",
    "lc": "1",
    "vc": "0.58",
    "sd": "65.93",
    "sr": "3.3",
    "sz": "3.17",
    "se": "444.59",
    "ch": "522.44",
    "sy": "59.63",
    "tw": "426.98",
    "tj": "5.58",
    "tz": "22.43",
    "th": "312.61",
    "tl": "0.62",
    "tg": "3.07",
    "to": "0.3",
    "tt": "21.2",
    "tn": "43.86",
    "tr": "729.05",
    "tm": 0,
    "ug": "17.12",
    "ua": "136.56",
    "ae": "239.65",
    "gb": "2258.57",
    "us": "14624.18",
    "uy": "40.71",
    "uz": "37.72",
    "vu": "0.72",
    "ve": "285.21",
    "vn": "101.99",
    "ye": "30.02",
    "zm": "15.69",
    "zw": "5.57"
  };
  $('#vmapWorld').vectorMap({
    map: 'world_en',
    backgroundColor: null,
    color: '#ffffff',
    hoverOpacity: 0.7,
    selectedColor: '#666666',
    enableZoom: false,
    showTooltip: true,
    values: dataWorld,
    scaleColors: [
      '#C8EEFF', '#006491'
    ],
    normalizeFunction: 'polynomial'
  });
  $('#vmapUsa').vectorMap({
    map: 'usa_en',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    colors: {
      wa: '#054055',
      ia: '#054055',
      nd: '#054055',
      ks: '#054055',
      ut: '#054055',
      nm: '#054055',
      ar: '#054055',
      ky: '#054055',
      nc: '#054055',
      fl: '#054055',
      pa: '#054055',
      ma: '#054055',
      hi: '#054055',
      or:'#F17A58',
      mt:'#F17A58',
      az:'#F17A58',
      ne:'#F17A58',
      tx:'#F17A58',
      tn:'#F17A58',
      oh:'#F17A58',
      dc:'#F17A58',
      vt:'#F17A58',
      ca:'#327B6B',
      ak:'#327B6B',
      id:'#327B6B',
      co:'#327B6B',
      sd:'#327B6B',
      mo:'#327B6B',
      ms:'#327B6B',
      wi:'#327B6B',
      in:'#327B6B',
      ga:'#327B6B',
      wa:'#327B6B',
      nz:'#327B6B',
      ct:'#327B6B',
      me:'#327B6B',
      nj:'#327B6B',
      va:'#327B6B',
      md:'#327B6B',
      nv:'#F4955A',
      wy:'#F4955A',
      ok:'#F4955A',
      mn:'#F4955A',
      il:'#F4955A',
      mi:'#F4955A',
      al:'#F4955A',
      la:'#F4955A',
      sc:'#F4955A',
      wv:'#F4955A',
      ny:'#F4955A',
      nh:'#F4955A',
      ri:'#F4955A',
      de:'#F4955A',
    },
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  
  $('#vmapGermany').vectorMap({
    map: 'germany_en',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    selectedRegions:['th', 'sh', 'st'],
    colors: {
      th: '#000000',
      sh: '#DD0000',
      st: '#FFCE00',
      sn:'#000000',
      sl:'#DD0000',
      rp: '#FFCE00',
      nw: '#FFCE00',
      ni: '#000000',
      mv:'#DD0000',
      be:'#FFCE00',
      he:'#000000',
      hh: '#FFCE00',
      hb: '#DD0000',
      bb: '#000000',
      by:'#FFCE00',
      bw:'#DD0000',
    },
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapTurkey').vectorMap({
    map: 'turkey',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    colors: {
      '01': '#8e44ad',
      '02': '#27ae60',
      '03': '#8e44ad',
      '04': '#27ae60',
      '05': '#8e44ad',
      '06': '#27ae60',
      '07': '#8e44ad',
      '08': '#27ae60',
      '09': '#8e44ad',
      '10': '#27ae60',
      '11': '#8e44ad',
      '12': '#27ae60',
      '13': '#8e44ad',
      '14': '#27ae60',
      '15': '#8e44ad',
      '16': '#27ae60',
      '17': '#8e44ad',
      '18': '#27ae60',
      '19': '#8e44ad',
      '20': '#27ae60',
      '21': '#8e44ad',
      '22': '#27ae60',
      '23': '#8e44ad',
      '24': '#27ae60',
      '25': '#8e44ad',
      '26': '#27ae60',
      '27': '#8e44ad',
      '28': '#27ae60',
      '29': '#8e44ad',
      '30': '#27ae60',
      '31': '#8e44ad',
      '32': '#27ae60',
      '33': '#8e44ad',
      '34': '#27ae60',
      '35': '#8e44ad',
      '36': '#27ae60',
      '37': '#8e44ad',
      '38': '#27ae60',
      '39': '#8e44ad',
      '40': '#27ae60',
      '41': '#8e44ad',
      '42': '#27ae60',
      '43': '#8e44ad',
      '44': '#27ae60',
      '45': '#8e44ad',
      '46': '#27ae60',
      '47': '#8e44ad',
      '48': '#27ae60',
      '49': '#8e44ad',
      '50': '#27ae60',
      '51': '#8e44ad',
      '52': '#27ae60',
      '54': '#8e44ad',
      '55': '#27ae60',
      '56': '#8e44ad',
      '57': '#27ae60',
      '58': '#8e44ad',
      '59': '#27ae60',
      '60': '#8e44ad',
      '61': '#27ae60',
      '62': '#8e44ad',
      '63': '#27ae60',
      '64': '#8e44ad',
      '65': '#27ae60',
      '66': '#8e44ad',
      '67': '#27ae60',
      '68': '#8e44ad',
      '69': '#27ae60',
      '70': '#8e44ad',
      '71': '#27ae60',
      '72': '#8e44ad',
      '73': '#27ae60',
      '74': '#8e44ad',
      '75': '#27ae60',
      '76': '#8e44ad',
      '77': '#27ae60',
      '78': '#8e44ad',
      '79': '#27ae60',
      '80': '#8e44ad',
      '81': '#27ae60',
      
      
    },
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapAlgeria').vectorMap({
    map: 'dz_fr',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    colors: {
      '1': '#006233',
      '2': '#D21034',
      '3': '#006233',    
      '4': '#D21034',
      '5': '#006233',
      '6': '#D21034',
      '7': '#006233',
      '8': '#D21034',
      '9': '#006233',
      '10': '#D21034',
      '11': '#006233',
      '12': '#D21034',
      '13': '#006233',
      '14': '#D21034',
      '15': '#006233',
      '16': '#D21034',
      '16': '#006233',
      '17': '#D21034',
      '18': '#006233',
      '19': '#D21034',
      '20': '#006233',
      '21': '#D21034',
      '22': '#006233',
      '23': '#D21034',
      '24': '#006233',
      '25': '#D21034',
      '26': '#006233',
      '27': '#D21034',
      '28': '#006233',
      '29': '#D21034',
      '30': '#006233',
      '31': '#D21034',
      '32': '#006233',
      '33': '#D21034',
      '34': '#006233',
      '35': '#D21034',
      '36': '#006233',
      '37': '#D21034',
      '38': '#006233',
      '39': '#D21034',
      '40': '#006233',
      '41': '#D21034',
      '42': '#006233',
      '43': '#D21034',
      '44': '#006233',
      '45': '#D21034',
      '46': '#006233',
      '47': '#D21034',
      '48': '#006233'
      
      
      
    },
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapArgentina').vectorMap({
    map: 'argentina_en',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    values: {  "sc": "1","co": "4","ju": "12","tf": "7","cr": "3","tu": "14","ch": "16","rn": "1","sf": "6","fo": "8","ne": "10","mi": "5","lp": "9","me": "2","sj": "6","ca": "4","cc": "13","lr": "9","se": "7","sl": "2","er": "15","ba": "12","sa": "4"},
    scaleColors: [
      '#74ACDF', '#FFFFFF','#F6B40E','#8B3C10'
    ],
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapBrazil').vectorMap({
    map: 'brazil_br',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    values: {
      'br-01': '3',
      'br-02': '5',
      'br-03': '2',
      'br-04': '12',
      'br-05': '14',
      'br-06': '13',
      'br-07': '10',
      'br-08': '4',
      'br-09': '9',
      'br-10': '13',
      'br-11': '19',
      'br-12': '14',
      'br-13': '10',
      'br-14': '6',
      'br-15': '4',
      'br-16': '1',
      'br-17': '12',
      'br-18': '8',
      'br-19': '5',
      'br-20': '19',
      'br-21': '20',
      'br-22': '2',
      'br-23': '7',
      'br-24': '5',
      'br-25': '8',
      'br-26': '10',
      'br-27': '11',
    
    },
    scaleColors: [
      '#009B3A', '#FEDF00','#002776'
    ],
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapCanada').vectorMap({
    map: 'canada_en',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    values:{"nt":"10","nu":"4","ns":"12","mb":"2","sk":"5","qc":"3","pe":"7","bc":"6","yt":"10","nb":"2","nl":"8","on":"3","ab":"9",},
    scaleColors: [
      '#FF0000', '#eeeeee'
    ],
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapEurope').vectorMap({
    map: 'europe_en',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    color: '#273c75',
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapFrance').vectorMap({
    map: 'france_fr',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    color: '#273c75',
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapGreece').vectorMap({
    map: 'greece',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    color: '#273c75',
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapIran').vectorMap({
    map: 'iran_ir',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    color: '#273c75',
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapIraq').vectorMap({
    map: 'iraq',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    color: '#273c75',
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapRussia').vectorMap({
    map: 'russia_en',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    color: '#273c75',
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapTunussia').vectorMap({
    map: 'tunisia',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    color: '#273c75',
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });
  $('#vmapAustralia').vectorMap({
    map: 'australia_en',
    backgroundColor: null,
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: null,
    color: '#273c75',
    onRegionClick: function (event, code, region) {
      event.preventDefault();
    }
  });