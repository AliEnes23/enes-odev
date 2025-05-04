// Singleton sınıfını tanımlıyoruz
class SingletonService {
    // static değişken ile sınıfın tek bir örneğini saklıyoruz
    private static instance: SingletonService;
  
    // private constructor sayesinde bu sınıf dışarıdan new ile çağrılamaz
    private constructor() {
      console.log("Yeni bir SingletonService örneği oluşturuldu");
    }
  
    // Singleton örneğini almak için kullanılan static metod
    public static getInstance(): SingletonService {
      // Eğer daha önce bir örnek oluşturulmamışsa, oluştur
      if (!SingletonService.instance) {
        SingletonService.instance = new SingletonService();
      }
      // Mevcut örneği döndür
      return SingletonService.instance;
    }
  
    // Örnek bir metod
    public getCurrentTime(): string {
      return new Date().toLocaleTimeString();
    }
  }
  
  // React bileşeni
  import React, { useEffect, useState } from "react";
  
  const SingletonExample: React.FC = () => {
    // Saat bilgisini tutmak için state
    const [time, setTime] = useState("");
  
    useEffect(() => {
      // Singleton örneğini alıyoruz
      const singleton = SingletonService.getInstance();
  
      // Singleton üzerinden saat bilgisini alıyoruz
      const currentTime = singleton.getCurrentTime();
  
      // State'e saat bilgisini atıyoruz
      setTime(currentTime);
  
      // Başka bir örnek almaya çalışıyoruz (aynı örnek döner)
      const another = SingletonService.getInstance();
  
      // Konsola iki örneğin aynı olup olmadığını yazdırıyoruz
      console.log(singleton === another); // true olmalı
    }, []);
  
    // Bileşenin render ettiği JSX
    return (
      <div className="p-4 bg-gray-100 rounded">
        <h1 className="text-xl font-bold mb-2">Singleton Örneği</h1>
        <p>Singleton'dan alınan saat: {time}</p>
      </div>
    );
  };
  
  export default SingletonExample;
  