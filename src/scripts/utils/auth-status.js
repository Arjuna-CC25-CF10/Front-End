const AuthStatus = {
 check() {
  const token = localStorage.getItem('token');
  const currentHash = window.location.hash;

  const authButtons = document.getElementById('auth-buttons');
  const userNav = document.getElementById('user-nav');
  const publicNav = document.getElementById('public-nav-wrapper');

  const drawerRegister = document.getElementById('drawer-register');
  const drawerSignin = document.getElementById('drawer-signin');

  // Ketika user login
  if (token) {
    authButtons?.classList.add('d-none');         // desktop
    drawerRegister?.classList.add('d-none');      // mobile
    drawerSignin?.classList.add('d-none');        // mobile

    userNav?.classList.remove('d-none');

    if (publicNav) {
        if (token) {
        authButtons?.classList.add('d-none');

        publicNav.classList.add('d-none');
      } else {
        publicNav.classList.remove('d-none');
      }
    }

  } else {
    // Jika belum login
    authButtons?.classList.remove('d-none');
    drawerRegister?.classList.remove('d-none');
    drawerSignin?.classList.remove('d-none');
    userNav?.classList.add('d-none');
    publicNav?.classList.remove('d-none');
  }
},


  async confirmLogout() {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of your session.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
      AuthStatus.logout();
    }
  },

  logout() {
    localStorage.removeItem('token');
    // Jika kamu pakai sessionStorage juga, tambahkan:
    sessionStorage.clear();
    window.location.href = '#/';
  },
};

export default AuthStatus;
