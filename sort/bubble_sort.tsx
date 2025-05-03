// Bubble Sort algoritması: Küçükten büyüğe sıralar
export default function BubbleSort(arr: number[]): number[] {
  const n = arr.length;

  // Dış döngü: Dizideki her elemanı sırayla kontrol eder
  for (let i = 0; i < n - 1; i++) {
    // İç döngü: Her geçişte son sıralanmış elemanı dışarda bırakır
    for (let j = 0; j < n - 1 - i; j++) {
      // Eğer mevcut eleman bir sonrakinden büyükse yer değiştir
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Sıralanmış diziyi döndür
  return arr;
}