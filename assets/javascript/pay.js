let galleryArray = [
  {
    id: 1,
    name: "100 ống hút gạo",
    src: "assets/img/onghutgao.webp",
    desc: "Một trong những lợi ích của ống hút gạo là dễ dàng phânhủy trong 3 tháng thay vì hàng trăm năm như ống hút bình thường.",
    price: 200,
  },

  {
    id: 3,
    name: "Bình giữ nhiệt inox",
    src: "assets/img/binhgiunhiet.jpg",
    desc: "Chất liệu rất bền, có thể tái chế, tái sử dụng nhiều lần mà không gây nguy hiểm cho sức khỏe. Chỉ cần bạn vệ sinh sạch sẽ là được.",
    price: 200,
  },
  {
    id: 4,
    name: "Túi vải không dệt",
    src: "assets/img/tuivaikhongdet.jpg",
    desc: "Những loại túi vải này có thể tái sử dụng bằng cách giặt sạch sau mỗi lần dùng. Chính vì vậy mà túi vải đã trở thành một món đồ dùng thân thiện với môi trường",
    price: 150,
  },
  {
    id: 5,
    name: "100 ống hút tre",
    src: "assets/img/onghuttre.jpg",
    desc: "Có thể vệ sinh và tái sử dụng, kháng khuẩn tự nhiên, phân hủy tự nhiên. Sử dụng tre Việt Nam tự nhiên 100% và có thể sử dụng với đồ uống nóng & lạnh",
    price: 250,
  },
  {
    id: 6,
    name: "Bông tắm xơ mướp",
    src: "assets/img/bongtamxomuop.png",
    desc: "Xơ mướp còn được làm thành bông tắm vệ sinh cá nhân. Sản phẩm vừa có tác dụng tẩy tế bào chết, vừa tốt cho việc lưu thông máu.",
    price: 50,
  },
  {
    id: 8,
    name: "Túi vải dứa",
    src: "assets/img/tuivaidua.jpg",
    desc: "Sản phẩm này được dệt từ các sợi PP, có sức chịu tải rất tốt, thường được dùng để đựng cám, gạo, thực phẩm đi chợ,… Độ bền của sản phẩm có thể lên đến 5 năm, vì vậy bạn hoàn toàn có thể tái sử dụng nhiều lần.",
    price: 20,
  },
  {
    id: 9,
    name: "Xà phòng thiên nhiên",
    src: "assets/img/xaphongthiennhien.jpg",
    desc: "Các loại xà bông tắm làm từ các thành phần tự nhiên như bơ, mật ong, nha đam… hoặc các dầu thực vật (oliu, dầu dừa…) Không có chất bảo quản, không có chất hóa học tạo mùi.",
    price: 20,
  },
  {
    id: 10,
    name: "Bộ ống hút inox",
    src: "assets/img/boonghutinox.jpg",
    desc: "Việc sử dụng bộ ống hút inox – một sản phẩm thân thiện với môi trường khá phổ biến, hiện đang là giải pháp tối ưu nhất.",
    price: 20,
  },
  {
    id: 11,
    name: "Bàn chải tre",
    src: "/assets/img/banchaitre.jpg",
    desc: "Sản phẩm với phần thân được làm từ tre, sợi lông làm từ sợi sinh học dễ phân hủy và vỏ hộp làm từ giấy tái chế.",
    price: 20,
  },
  {
    id: 12,
    name: "Bình nước giữ nhiệt bằng tre",
    src: "/assets/img/binhnuoctre.jpg",
    desc: "Bình nước làm từ tre là sản phẩm thân thiện môi trường. Có thể tái sử dụng nhiều lần và không gây hại cho môi trường khi thải ra ngoài.",
    price: 20,
  },
  {
    id: 14,
    name: "Giỏ tre, nứa",
    src: "/assets/img/giotrenua.jpg",
    desc: "Chúng dễ phân hủy không gây hại tới đất. Đồng thời tăng thêm thu nhập cho những người làm nghề đan lát.",
    price: 20,
  },
  {
    id: 15,
    name: "Túi đựng thực phẩm tự phân huỷ sinh học",
    src: "/assets/img/tuidungthucpham.webp",
    desc: "Túi có khả năng chống rò rỉ chất bẩn trong quá trình di chuyển. Đặc biệt, nếu các túi rác thông thường mất tới hàng trăm năm mới phân hủy thì túi này chỉ khoảng vài năm, ít gây hại cho môi trường đất.",
    price: 20,
  },
  {
    id: 16,
    name: "Ly giấy",
    src: "/assets/img/lygiay.jpg",
    desc: "Sản phẩm được làm ra từ nguyên liệu bột giấy chất lượng cao được tráng lớp PE chống thấm chịu được đồ uống nóng lạnh",
    price: 20,
  },
  {
    id: 17,
    name: "Miếng rửa bát xơ mướp",
    src: "/assets/img/miengruabatxomuop.jpg",
    desc: "Vừa rẻ lại dễ tìm, giá thành không cao mà công dụng còn vượt trội hơn hẳn. Miếng rửa bát xơ mướp vừa nhẹ, có khả năng tạo bọt làm sạch vết bẩn.",
    price: 20,
  },
  {
    id: 18,
    name: "Vải bọc sáp ong",
    src: "/assets/img/vaibocsapong.jpg",
    desc: "Vải sáp ong được làm hoàn toàn từ các nguyên liệu tự nhiên, không chứa chất độc hại. Bạn có thể dùng đê bọc các loại rau củ, bánh mì, chén dĩa… Có thể tái sử dụng nên có thể thay thế hoàn toàn túi nilon, màng bọc thực phẩm và hộp nhựa.",
    price: 20,
  },
  {
    id: 20,
    name: "Kính râm bằng gỗ",
    src: "/assets/img/kinhrambanggo.jpg",
    desc: "Thiết kế phần gọng được làm từ chất liệu gỗ tự nhiên.",
    price: 20,
  },
  {
    id: 21,
    name: "Ống hút cỏ bàng",
    src: "/assets/img/onghutcobang.jpg",
    desc: "Bạn có thể sử dụng được cho tất cả các loại nước, kể cả nước nóng. Ống hút cỏ không tan hay biến dạng trong nước dù bạn ngâm chúng trong thời gian dài.",
    price: 20,
  },
  {
    id: 22,
    name: "Ống hút bã mía",
    src: "/assets/img/onghutbamia.jpeg",
    desc: "Sản phẩm được làm từ chất liệu bã mía nên có khả năng tự phân hủy 100% trong điều kiện môi trường tự nhiên. Đặc biệt, quá trình này không sinh ra các chất vô cơ hay hạt vi nhựa.",
    price: 20,
  },
  {
    id: 24,
    name: "Túi tote vải tái sử dụng",
    src: "/assets/img/tuitote.jpg",
    desc: "Một chiếc túi vải có thể được dùng trong các hoạt động trong cuộc sống như được dùng làm túi đi học, túi du dịch, túi mua sắm,...",
    price: 20,
  },
  {
    id: 25,
    name: "Bộ dụng cụ ăn uống bã mía",
    src: "/assets/img/hopbamia.jpg",
    desc: "Các loại hộp bã mía dùng đựng cơm, thức ăn nhanh… thay thế tuyệt vời cho các loại hộp nhựa xốp. Nguyên liệu chính là từ bã mía, có khả năng tự phân hủy sinh học.",
    price: 20,
  },
  {
    id: 26,
    name: "Ván trượt tạo từ phế liệu lưới đánh cá",
    src: "/assets/img/vantruot.jpeg",
    desc: "Làm từ 100% chất liệu lưới đánh cá cũ. Bạn cũng có thể lựa chọn màu sắc bánh xe - được làm từ 100% chất liệu tái chế.",
    price: 20,
  },
  {
    id: 28,
    name: "Lọ làm từ vỏ dừa",
    src: "/assets/img/vodua.webp",
    desc: "Được làm từ vỏ dừa. Thuần chay, thân thiện với môi trường",
    price: 20,
  },
  {
    id: 29,
    name: "Cốc làm từ bã cà phê",
    src: "/assets/img/lybacafe.jpg",
    desc: "Với chất liệu làm từ bã cà phê chiếm 80%, cốc đảm bảo an toàn sử dụng cho người dùng so với các dòng ly nhựa, thủy tinh thông thường.",
    price: 20,
  },
];

function setItem() {
  var dem = 0;
  var sum = 0;
  const ul = document.getElementById("list_pay");
  ul.innerHTML = "";
  
  // Đếm số lượng sản phẩm trong localStorage
  let hasProducts = false;
  
  galleryArray.forEach((value) => {
    let count = localStorage.getItem(value.id);
    if (count !== null && count > 0) {
      hasProducts = true;
      dem += parseInt(count);
      sum += count * value.price * 1000;
      ul.innerHTML += `
        <li class="group item-product-${value.id} bg-gradient-to-r from-white to-gray-50 rounded-3xl border-2 border-gray-100 hover:border-[#3bae8b] transition-all duration-300 hover:shadow-xl">
          <div class="p-6">
            <div class="flex items-center space-x-6">
              <!-- Hình ảnh sản phẩm -->
              <div class="relative">
                <img src="${value.src}" alt="${value.name}" 
                     class="w-20 h-20 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" />
                <div class="absolute -top-3 -right-3 w-8 h-8 bg-[#3bae8b] rounded-full flex items-center justify-center shadow-lg">
                  <span class="text-white text-sm font-bold">${count}</span>
                </div>
              </div>
              
              <!-- Thông tin sản phẩm -->
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-gray-800 text-lg truncate group-hover:text-[#3bae8b] transition-colors mb-3">
                  ${value.name}
                </h4>
                <div class="flex items-center justify-between">
                  <!-- Điều chỉnh số lượng -->
                  <div class="flex items-center bg-white rounded-2xl border border-gray-200 shadow-lg">
                    <button id="minus_${value.id}" 
                            class="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-l-2xl transition-all duration-200 text-lg font-bold">
                      -
                    </button>
                    <span id="sl_${value.id}" class="w-12 h-12 flex items-center justify-center text-lg font-semibold border-x border-gray-200">
                      ${count}
                    </span>
                    <button id="add_${value.id}" 
                            class="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-r-2xl transition-all duration-200 text-lg font-bold">
                      +
                    </button>
                  </div>
                  
                  <!-- Giá tiền -->
                  <div class="text-right">
                    <span id="total_${value.id}" class="font-bold text-[#3bae8b] text-lg">
                      ${(1000 * count * parseFloat(value.price)).toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      `;
    }
  });
  
  // Nếu không có sản phẩm nào
  if (!hasProducts) {
    ul.innerHTML = `
      <li class="text-center py-16">
        <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center shadow-lg">
          <i class="fas fa-shopping-cart text-4xl text-gray-400"></i>
        </div>
        <p class="text-2xl text-gray-500 mb-6">Giỏ hàng trống</p>
        <a href="product.html" 
           class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3bae8b] to-[#229245] text-white rounded-2xl hover:shadow-lg transition-all duration-300 group text-lg font-semibold">
          <i class="fas fa-plus mr-3 group-hover:rotate-90 transition-transform text-lg"></i>
          Thêm sản phẩm
        </a>
      </li>
    `;
  }
  
  // Cập nhật thông tin tóm tắt
  document.getElementById("pay_sl").innerHTML = `${dem} sản phẩm`;
  document.getElementById("pay_sp").innerHTML = `${dem}`;
  document.getElementById("pay_temp").innerHTML = `${sum.toLocaleString('vi-VN')}`;
  document.getElementById("pay_sum").innerHTML = `${sum.toLocaleString('vi-VN')}`;
}

setItem();

document.getElementById("pay_btn").onclick = (e) => {
  e.preventDefault();
  
  // Kiểm tra form
  const form = e.target.closest('form');
  const inputs = form.querySelectorAll('input[required], select[required]');
  let isValid = true;
  let firstInvalidInput = null;
  
  inputs.forEach(input => {
    const container = input.closest('div');
    const label = container.querySelector('label');
    
    if (!input.value.trim()) {
      input.classList.add('border-red-500', 'bg-red-50');
      input.classList.remove('border-gray-200');
      if (label) label.classList.add('text-red-500');
      if (!firstInvalidInput) firstInvalidInput = input;
      isValid = false;
    } else {
      input.classList.remove('border-red-500', 'bg-red-50');
      input.classList.add('border-green-500');
      if (label) {
        label.classList.remove('text-red-500');
        label.classList.add('text-green-600');
      }
    }
  });
  
  if (!isValid) {
    // Scroll đến input đầu tiên bị lỗi
    if (firstInvalidInput) {
      firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstInvalidInput.focus();
    }
    
    // Hiển thị thông báo lỗi đẹp
    showNotification("Vui lòng điền đầy đủ thông tin bắt buộc!", "error");
    return;
  }
  
  // Kiểm tra giỏ hàng
  let hasItems = false;
  for (let i = 1; i <= 30; i++) {
    if (localStorage.getItem(i) > 0) {
      hasItems = true;
      break;
    }
  }
  
  if (!hasItems) {
    showNotification("Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi đặt hàng.", "warning");
    return;
  }
  
  // Hiệu ứng loading với animation đẹp
  const btn = document.getElementById("pay_btn");
  const originalHTML = btn.innerHTML;
  
  btn.innerHTML = `
    <div class="flex items-center justify-center gap-3">
      <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      <span>Đang xử lý đơn hàng...</span>
    </div>
  `;
  btn.disabled = true;
  btn.classList.add('pulse-glow', 'cursor-not-allowed');
  
  // Simulate payment process
  setTimeout(() => {
    btn.innerHTML = `
      <div class="flex items-center justify-center gap-3">
        <i class="fas fa-check-circle text-lg"></i>
        <span>Đặt hàng thành công!</span>
      </div>
    `;
    btn.classList.remove('pulse-glow');
    btn.classList.add('bg-green-500');
    
    showNotification("🎉 Đặt hàng thành công! Cảm ơn bạn đã tin tưởng EcoMart!", "success");
    
    setTimeout(() => {
      localStorage.clear();
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      btn.classList.remove('cursor-not-allowed', 'bg-green-500');
      setItem();
    }, 2000);
  }, 3000);
};

// Hàm hiển thị thông báo đẹp
function showNotification(message, type = "info") {
  const notification = document.createElement('div');
  const icons = {
    success: 'fas fa-check-circle text-green-500',
    error: 'fas fa-exclamation-circle text-red-500',
    warning: 'fas fa-exclamation-triangle text-yellow-500',
    info: 'fas fa-info-circle text-blue-500'
  };
  
  const colors = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    warning: 'bg-yellow-50 border-yellow-200',
    info: 'bg-blue-50 border-blue-200'
  };
  
  notification.className = `fixed top-4 right-4 z-50 p-4 rounded-xl border-2 ${colors[type]} shadow-2xl transform transition-all duration-500 translate-x-full opacity-0`;
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <i class="${icons[type]} text-xl"></i>
      <span class="font-semibold text-gray-800">${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-gray-500 hover:text-gray-700">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full', 'opacity-0');
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => notification.remove(), 500);
  }, 5000);
}

galleryArray.forEach((value) => {
  if (localStorage.getItem(value.id) > 0) {
    document.getElementById(`add_${value.id}`).onclick = () => {
      setData(value.id, true, value.price);
    };
  }
  if (localStorage.getItem(value.id) > 0) {
    document.getElementById(`minus_${value.id}`).onclick = () => {
      var count = localStorage.getItem(value.id);
      if (count > 0) {
        setData(value.id, false, value.price);
      } else localStorage.removeItem(value.id);
    };
  }
});

function setData(id, check, price) {
  var count = parseInt(localStorage.getItem(id)) || 0;
  var sp = parseInt(document.getElementById("pay_sp").innerHTML) || 0;
  let currentSum = parseInt(document.getElementById("pay_sum").innerHTML.replace(/[,.]/g, '')) || 0;
  
  // Cập nhật số lượng
  if (check) {
    count++;
  } else {
    count--;
  }
  
  if (count <= 0) {
    localStorage.removeItem(id);
    document.querySelector(".item-product-" + id)?.remove();
    count = 0;
  } else {
    localStorage.setItem(id, count);
  }
  
  // Tính toán lại tổng
  let newSum = 0;
  let totalItems = 0;
  for (let i = 1; i <= 30; i++) {
    let itemCount = parseInt(localStorage.getItem(i)) || 0;
    if (itemCount > 0) {
      totalItems += itemCount;
      let item = galleryArray.find(product => product.id == i);
      if (item) {
        newSum += itemCount * item.price * 1000;
      }
    }
  }
  
  // Cập nhật giao diện
  document.getElementById("pay_sl").innerHTML = `Đơn hàng (${totalItems} sản phẩm)`;
  document.getElementById("pay_sp").innerHTML = `${totalItems}`;
  document.getElementById("pay_temp").innerHTML = `${newSum.toLocaleString()}`;
  document.getElementById("pay_sum").innerHTML = `${newSum.toLocaleString()}`;
  
  if (count > 0) {
    document.getElementById(`sl_${id}`).innerHTML = count;
    document.getElementById(`total_${id}`).innerHTML = `${(1000*count * parseFloat(price)).toLocaleString()}đ`;
  }
  
  // Nếu giỏ hàng trống, hiển thị thông báo
  if (totalItems === 0) {
    const ul = document.getElementById("list_pay");
    ul.innerHTML = `
      <li class="text-center py-12">
        <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
        <p class="text-2xl text-gray-500">Giỏ hàng trống</p>
        <a href="product.html" class="inline-block mt-4 px-6 py-3 bg-[#3bae8b] text-white rounded-lg hover:bg-[#229245] transition-colors">
          Tiếp tục mua sắm
        </a>
      </li>
    `;
  }
}

function result(res, count, price) {
  if (isNaN(res)) {
    return (res += parseInt(count) * price);
  } else return res;
}
