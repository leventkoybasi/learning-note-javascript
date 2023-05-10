function imgSlider(anything) {
	document.querySelector(".starbucks").src = anything;
}

/* 

Bu JavaScript fonksiyonu, bir resim kaynağı adresi ile çağrıldığında, belirtilen kaynak adresini içeren bir görüntüyü bir HTML belgesindeki belirli bir <img> etiketi ile değiştirir.

Daha spesifik olarak, bu fonksiyon "imgSlider" adı verilen bir fonksiyondur ve tek bir parametre "anything" alır. "anything" parametresi, görüntünün kaynak adresini temsil eder. Bu parametre, bir HTML belgesindeki resim değiştirme işleminin tetiklendiği bir HTML etiketi ile birlikte kullanılır.

Fonksiyon, "document.querySelector()" yöntemini kullanarak, .starbucks CSS sınıfı ile eşleşen ilk <img> etiketini seçer. Daha sonra, .src özelliği kullanılarak, seçilen <img> etiketinin "src" özelliği belirtilen kaynak adresine ayarlanır. Bu sayede, kaynak adresi, seçilen <img> etiketi tarafından temsil edilen görüntüyü değiştirir ve yeni görüntü kaynak adresi belirtilen kaynak adıyla değiştirilir.
*/
