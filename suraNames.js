let suraNames = [
    {
      "chapter": 1,
      "name": "Al-Fatiha"
    },
    {
      "chapter": 2,
      "name": "Al-Baqara"
    },
    {
      "chapter": 3,
      "name": "Aal-E-Imran"
    },
    {
      "chapter": 4,
      "name": "An-Nisa"
    },
    {
      "chapter": 5,
      "name": "Al-Ma'idah"
    },
    {
      "chapter": 6,
      "name": "Al-An'am"
    },
    {
      "chapter": 7,
      "name": "Al-A'raf"
    },
    {
      "chapter": 8,
      "name": "Al-Anfal"
    },
    {
      "chapter": 9,
      "name": "At-Tawbah"
    },
    {
      "chapter": 10,
      "name": "Yunus"
    },
    {
      "chapter": 11,
      "name": "Hud"
    },
    {
      "chapter": 12,
      "name": "Yusuf"
    },
    {
      "chapter": 13,
      "name": "Ar-Ra'd"
    },
    {
      "chapter": 14,
      "name": "Ibrahim"
    },
    {
      "chapter": 15,
      "name": "Al-Hijr"
    },
    {
      "chapter": 16,
      "name": "An-Nahl"
    },
    {
      "chapter": 17,
      "name": "Al-Isra"
    },
    {
      "chapter": 18,
      "name": "Al-Kahf"
    },
    {
      "chapter": 19,
      "name": "Maryam"
    },
    {
      "chapter": 20,
      "name": "Taha"
    },
    {
      "chapter": 21,
      "name": "Al-Anbiya"
    },
    {
      "chapter": 22,
      "name": "Al-Hajj"
    },
    {
      "chapter": 23,
      "name": "Al-Mu’minun"
    },
    {
      "chapter": 24,
      "name": "An-Nur"
    },
    {
      "chapter": 25,
      "name": "Al-Furqan"
    },
    {
      "chapter": 26,
      "name": "Ash-Shu'ara"
    },
    {
      "chapter": 27,
      "name": "An-Naml"
    },
    {
      "chapter": 28,
      "name": "Al-Qasas"
    },
    {
      "chapter": 29,
      "name": "Al-Ankabut"
    },
    {
      "chapter": 30,
      "name": "Ar-Rum"
    },
    {
      "chapter": 31,
      "name": "Luqman"
    },
    {
      "chapter": 32,
      "name": "As-Sajda"
    },
    {
      "chapter": 33,
      "name": "Al-Ahzab"
    },
    {
      "chapter": 34,
      "name": "Saba"
    },
    {
      "chapter": 35,
      "name": "Fatir"
    },
    {
      "chapter": 36,
      "name": "Ya-Sin"
    },
    {
      "chapter": 37,
      "name": "As-Saffat"
    },
    {
      "chapter": 38,
      "name": "Sad"
    },
    {
      "chapter": 39,
      "name": "Az-Zumar"
    },
    {
      "chapter": 40,
      "name": "Ghafir"
    },
    {
      "chapter": 41,
      "name": "Fussilat"
    },
    {
      "chapter": 42,
      "name": "Ash-Shura"
    },
    {
      "chapter": 43,
      "name": "Az-Zukhruf"
    },
    {
      "chapter": 44,
      "name": "Ad-Dukhan"
    },
    {
      "chapter": 45,
      "name": "Al-Jathiya"
    },
    {
      "chapter": 46,
      "name": "Al-Ahqaf"
    },
    {
      "chapter": 47,
      "name": "Muhammad"
    },
    {
      "chapter": 48,
      "name": "Al-Fath"
    },
    {
      "chapter": 49,
      "name": "Al-Hujurat"
    },
    {
      "chapter": 50,
      "name": "Qaf"
    },
    {
      "chapter": 51,
      "name": "Adh-Dhariyat"
    },
    {
      "chapter": 52,
      "name": "At-Tur"
    },
    {
      "chapter": 53,
      "name": "An-Najm"
    },
    {
      "chapter": 54,
      "name": "Al-Qamar"
    },
    {
      "chapter": 55,
      "name": "Ar-Rahman"
    },
    {
      "chapter": 56,
      "name": "Al-Waqia"
    },
    {
      "chapter": 57,
      "name": "Al-Hadid"
    },
    {
      "chapter": 58,
      "name": "Al-Mujadila"
    },
    {
      "chapter": 59,
      "name": "Al-Hashr"
    },
    {
      "chapter": 60,
      "name": "Al-Mumtahina"
    },
    {
      "chapter": 61,
      "name": "As-Saff"
    },
    {
      "chapter": 62,
      "name": "Al-Jumu'a"
    },
    {
      "chapter": 63,
      "name": "Al-Munafiqun"
    },
    {
      "chapter": 64,
      "name": "At-Taghabun"
    },
    {
      "chapter": 65,
      "name": "At-Talaq"
    },
    {
      "chapter": 66,
      "name": "At-Tahrim"
    },
    {
      "chapter": 67,
      "name": "Al-Mulk"
    },
    {
      "chapter": 68,
      "name": "Al-Qalam"
    },
    {
      "chapter": 69,
      "name": "Al-Haqqa"
    },
    {
      "chapter": 70,
      "name": "Al-Ma'arij"
    },
    {
      "chapter": 71,
      "name": "Nuh"
    },
    {
      "chapter": 72,
      "name": "Al-Jinn"
    },
    {
      "chapter": 73,
      "name": "Al-Muzzammil"
    },
    {
      "chapter": 74,
      "name": "Al-Muddaththir"
    },
    {
      "chapter": 75,
      "name": "Al-Qiyama"
    },
    {
      "chapter": 76,
      "name": "Al-Insan"
    },
    {
      "chapter": 77,
      "name": "Al-Mursalat"
    },
    {
      "chapter": 78,
      "name": "An-Naba"
    },
    {
      "chapter": 79,
      "name": "An-Nazi'at"
    },
    {
      "chapter": 80,
      "name": "Abasa"
    },
    {
      "chapter": 81,
      "name": "At-Takwir"
    },
    {
      "chapter": 82,
      "name": "Al-Infitar"
    },
    {
      "chapter": 83,
      "name": "Al-Mutaffifin"
    },
    {
      "chapter": 84,
      "name": "Al-Inshiqaq"
    },
    {
      "chapter": 85,
      "name": "Al-Buruj"
    },
    {
      "chapter": 86,
      "name": "At-Tariq"
    },
    {
      "chapter": 87,
      "name": "Al-A'la"
    },
    {
      "chapter": 88,
      "name": "Al-Ghashiya"
    },
    {
      "chapter": 89,
      "name": "Al-Fajr"
    },
    {
      "chapter": 90,
      "name": "Al-Balad"
    },
    {
      "chapter": 91,
      "name": "Ash-Shams"
    },
    {
      "chapter": 92,
      "name": "Al-Lail"
    },
    {
      "chapter": 93,
      "name": "Ad-Duhaa"
    },
    {
      "chapter": 114,
      "name": "An-Nas"
    }
  ]
  