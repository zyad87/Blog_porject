document.addEventListener('DOMContentLoaded', function () {
    // التحقق من حالة تسجيل الدخول
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName'); // الحصول على اسم المستخدم من التخزين المحلي

    const navbar = document.querySelector('.navbar-nav');
    const loginBtn = document.querySelector('#loginBtn');
    const signUpBtn = document.querySelector('#signUpBtn');
    const profileBtn = document.querySelector('#profileBtn');
    const profileText = profileBtn.querySelector('a'); // للحصول على عنصر الرابط داخل الـ Profile
    const newArticleBtn = document.querySelector('#newArticleBtn');
    const signOutBtn = document.querySelector('#signOutBtn');

    if (userId) {
        // إذا كان المستخدم مسجلًا، إخفاء تسجيل الدخول وإنشاء حساب، وإظهار الملف الشخصي وإضافة مدونة جديدة
        loginBtn.style.display = 'none';
        signUpBtn.style.display = 'none';
        profileBtn.style.display = 'block';
        newArticleBtn.style.display = 'block';
        signOutBtn.style.display = 'block';

        // استبدال كلمة "Profile" باسم المستخدم
        profileText.innerHTML = `<i class="fa-solid fa-user"></i> ${userName}`;
    } else {
        // إذا لم يكن المستخدم مسجلًا، إظهار تسجيل الدخول وإنشاء حساب، وإخفاء الملف الشخصي وإضافة مدونة جديدة
        loginBtn.style.display = 'block';
        signUpBtn.style.display = 'block';
        profileBtn.style.display = 'none';
        newArticleBtn.style.display = 'none';
        signOutBtn.style.display = 'none';

        // إرجاع النص إلى "Profile" في حال تسجيل الخروج
        profileText.innerHTML = `<i class="fa-solid fa-user"></i> Profile`;
    }

    // تسجيل الخروج
    signOutBtn.addEventListener('click', function () {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName'); // إزالة اسم المستخدم من التخزين المحلي
        window.location.href = './index.html';
    });
});
