# TypeScript ve React ile Proxy Design Pattern Uygulaması

**Proxy Tasarım Deseni**, bir nesneye doğrudan erişimi kısıtlamak veya bu erişimi kontrol altına almak için kullanılır. Araya bir vekil koyarak, işlemlerden önce veya sonra davranış eklemeye olanak tanır.

Enes en basitçe özetliyor **bu ayarı değiştir**, - olan değeri kullan ve ona göre set kullan, olan değer -> örnek, örnek ile hiç konuşmadan hiç import etmeden değiştirebiliyorum

## 📌 Kullanım Senaryoları
- Gerçek nesneye erişmeden önce kontrol mekanizması kurmak
- Ağa yapılan istekleri önbelleğe almak
- Kaynak tüketimini azaltmak için nesneleri gecikmeli başlatmak
- Güvenlik ve doğrulama işlemleri eklemek

## 🧱 Yapı Taşları
- **Service**: Ortak işlemleri tanımlayan soyut arayüz
- **ConcreteService**: Asıl işi yapan sınıf
- **ProxyService**: Asıl sınıfa erişimi kontrol eden aracı

## ⚛️ React ile Kullanım

Aşağıdaki örnekte, bir ürün bilgisini getiren servis öncesinde basit bir doğrulama yapan vekil sınıf kullanılmıştır.
