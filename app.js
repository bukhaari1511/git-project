//   canAccessView(view) {
//         const role = window.currentUser?.role || 'viewer';
//         const mode = this.currentMode || localStorage.getItem('pos_mode') || 'shop';
//         if (view === 'users') return this.can('manageUsers');
//         if (window.Rbac?.canAccessView) {
//             return window.Rbac.canAccessView(view, role, mode);
//         }
//         return false;
//     }