interface IProductService {
    getProduct(): Promise<string>;
  }
  
  class RealProductService implements IProductService {
    async getProduct() {
      return "📦 Ürün: Akıllı Saat";
    }
  }
  
  class AuthenticatedProductServiceProxy implements IProductService {
    constructor(
      private realService: IProductService,
      private isAuthenticated: boolean
    ) {}
  
    async getProduct() {
      if (!this.isAuthenticated) {
        throw new Error("🚫 Yetkisiz erişim!");
      }
      return this.realService.getProduct();
    }
  }
  
  import React, { useEffect, useState } from "react";
  
  export default function ProxyProductExample() {
    const [product, setProduct] = useState<string>("Yükleniyor...");
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const proxy = new AuthenticatedProductServiceProxy(
        new RealProductService(),
        true // Burayı false yaparsan hata alırsın
      );
  
      proxy
        .getProduct()
        .then(setProduct)
        .catch((err) => setError(err.message));
    }, []);
  
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">Proxy Kullanımı (Yetkilendirme)</h1>
        {error ? <p className="text-red-600">{error}</p> : <p>{product}</p>}
      </div>
    );
  }
  