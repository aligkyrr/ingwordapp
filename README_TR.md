# 📘 Bilişsel State Sistemi Simülatörü

⚠️ Bu proje bir **frontend uygulaması değildir**, bir **sistem tasarımı / kontrol sistemi simülasyon modelidir**.

Bu proje, **Elektrik & Elektronik Mühendisliği (EE)** ve **kontrol sistemleri mühendisliği** prensiplerinden ilham alınarak geliştirilmiş, JavaScript tabanlı bir **state-driven gömülü sistem simülasyonudur**.

Tarayıcı yalnızca bir **çalışma ortamı (runtime simulation layer)** olarak kullanılmıştır, sistemin kendisi değildir.

---

# 🧠 SİSTEM GENEL BAKIŞ

Bu proje, hafif bir gömülü bilişsel kontrol sistemi simüle eder:

- Finite State Machine (FSM)
- Kapalı çevrim (feedback control system)
- Modüler firmware benzeri mimari
- Olay tabanlı sistem davranışı
- Deterministik state geçişleri

---

# ⚙️ SİSTEM MİMARİSİ

Sistem klasik gömülü sistem / kontrol mühendisliği prensiplerini takip eder:

- Input → Process → Output veri akışı
- State tabanlı karar motoru
- Bellek odaklı yürütme modeli
- Geri besleme (feedback) döngüsü

---

# 🔁 KONTROL DÖNGÜSÜ DAVRANIŞI

1. Kullanıcı girdisi (uyarıcı)
2. State değerlendirme (sistem belleği)
3. İşleme mantığı (kontrol birimi)
4. Çıktı üretimi (arayüz katmanı)
5. Geri besleme (öğrenme döngüsü)

Bu yapı, **ayrık zamanlı adaptif kontrol sistemi** davranışına karşılık gelir.

---

# 🧠 TEMEL MÜHENDİSLİK KAVRAMLARI

- State Machine tasarımı
- Geri besleme kontrol sistemleri
- Deterministik sistem davranışı
- Bellek–state ilişkisi
- Modüler sistem ayrıştırması
- Olay tabanlı mimari

---

# 🚀 SİSTEM YETENEKLERİ

- Deterministik state ilerleme motoru
- Hata tabanlı öğrenme döngüsü
- Kalıcı bellek (localStorage)
- Harici REST API entegrasyonu
- Modüler sistem mimarisi
- Dinamik state geçişleri

---

# 🧰 TEKNOLOJİ YAPISI

- JavaScript (ES Modules)
- REST API (veri soyutlama katmanı)
- Tarayıcı çalışma ortamı (sadece simülasyon)

---

# 📁 MODÜL YAPISI

- `state.js` → Sistem belleği (RAM simülasyonu)
- `actions.js` → Kontrol birimi (karar motoru)
- `ui.js` → Çıkış arayüzü (HMI katmanı)
- `api.js` → Dış iletişim kanalı
- `storage.js` → Kalıcı bellek katmanı
- `main.js` → Başlatma süreci (boot sequence)
- `quiz.js` → Algoritmik işlem birimi
- `config.js` → Sistem konfigürasyon register’ları

---

# 🧠 MÜHENDİSLİK DEĞERİ

Bu proje şu yetkinlikleri gösterir:

- Gömülü sistem mimarisi düşünme yeteneği
- Kontrol sistemi mantığı implementasyonu
- State tabanlı hesaplama modeli
- Modüler firmware tasarım yaklaşımı
- Geri beslemeli adaptif sistem davranışı

---

# 🔐 KONFİGÜRASYON KATMANI

```js
export const SUPABASE_KEY = "PUBLIC_INTERFACE_KEY";
export const SUPABASE_URL = "DATA_LAYER_ENDPOINT";
```

---

# ⚠️ TASARIM PRENSİBİ

Bu sistem bilinçli olarak UI odaklı değil, **gömülü sistem simülasyon modeli** olarak tasarlanmıştır.

Tarayıcı yalnızca bir **çalışma ortamıdır**, sistemin kendisi değildir.

---

# 🧾 SİSTEM ÖZETİ

Finite state machine ve feedback control loop prensiplerini kullanan, gömülü sistem davranışını sanal ortamda simüle eden state-driven bir kontrol sistemi modelidir.