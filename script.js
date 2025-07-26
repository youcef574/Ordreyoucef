// Order Management System - JavaScript
// This file handles all the interactive functionality for the order management interface

// Global variables
let orders = [];
let filteredOrders = [];
let currentLanguage = 'fr';
let currentOrderId = null;

// Language translations
const translations = {
    fr: {
        pageTitle: "Gestion des Commandes",
        newOrders: "Nouvelles",
        processing: "En cours",
        shipped: "Expédiées",
        completed: "Terminées",
        searchPlaceholder: "Rechercher par nom, téléphone ou numéro de commande...",
        allStatuses: "Tous les statuts",
        statusNew: "Nouveau",
        statusProcessing: "En cours",
        statusPreparation: "En préparation",
        statusShipped: "Expédié",
        statusCompleted: "Terminé",
        statusCancelled: "Annulé",
        statusReturned: "Retour",
        statusAwaitingExchange: "En attente d'échange",
        statusExchangeShipped: "Échange expédié",
        statusExchangeCompleted: "Échange terminé",
        statusRefundProcessing: "Remboursement en cours",
        statusDisputeOpen: "Litige ouvert",
        to: "à",
        export: "Exporter",
        addTestOrder: "Commande test",
        notifyCustomers: "Informer les clients selon l'état",
        id: "ID",
        nom: "Nom",
        phone: "Téléphone",
        wilaya: "Wilaya",
        produit: "Produit",
        variants: "Variantes",
        quantity: "Qté",
        total: "Total",
        status: "Statut",
        date: "Date",
        action: "Action",
        invoiceTitle: "Facture",
        couleur: "Variantes",
        quantite: "Quantité",
        telephone: "Téléphone",
        commune: "Commune",
        prixProduit: "Prix produit",
        fraisLivraison: "Frais de livraison",
        callClient: "📞 Appeler le client",
        memos: "📝 Mémos / Notes",
        deleteOrder: "Supprimer",
        confirmDelete: "Confirmer la suppression",
        deleteWarning: "Êtes-vous sûr de vouloir supprimer cette commande ? Cette action ne peut pas être annulée.",
        cancel: "Annuler",
        confirmDeleteBtn: "Supprimer",
        dashboard: "Tableau de bord",
        settings: "Paramètres",
        logout: "Déconnexion"
    },
    en: {
        pageTitle: "Order Management",
        newOrders: "New",
        processing: "Processing",
        shipped: "Shipped",
        completed: "Completed",
        searchPlaceholder: "Search by name, phone or order number...",
        allStatuses: "All statuses",
        statusNew: "New",
        statusProcessing: "Processing",
        statusPreparation: "Preparation",
        statusShipped: "Shipped",
        statusCompleted: "Completed",
        statusCancelled: "Cancelled",
        statusReturned: "Returned",
        statusAwaitingExchange: "Awaiting exchange",
        statusExchangeShipped: "Exchange shipped",
        statusExchangeCompleted: "Exchange completed",
        statusRefundProcessing: "Refund processing",
        statusDisputeOpen: "Dispute open",
        to: "to",
        export: "Export",
        addTestOrder: "Test order",
        notifyCustomers: "Notify customers by status",
        id: "ID",
        nom: "Name",
        phone: "Phone",
        wilaya: "Wilaya",
        produit: "Product",
        variants: "Variants",
        quantity: "Qty",
        total: "Total",
        status: "Status",
        date: "Date",
        action: "Action",
        invoiceTitle: "Invoice",
        couleur: "Variants",
        quantite: "Quantity",
        telephone: "Phone",
        commune: "Commune",
        prixProduit: "Product price",
        fraisLivraison: "Delivery fee",
        callClient: "📞 Call client",
        memos: "📝 Memos / Notes",
        deleteOrder: "Delete",
        confirmDelete: "Confirm deletion",
        deleteWarning: "Are you sure you want to delete this order? This action cannot be undone.",
        cancel: "Cancel",
        confirmDeleteBtn: "Delete",
        dashboard: "Dashboard",
        settings: "Settings",
        logout: "Logout"
    }
};

// Sample order data
const sampleOrders = [
    {
        id: 1,
        nom: "Ahmed Benali",
        telephone: "+213 555 123 456",
        wilaya: "Alger",
        commune: "Bab Ezzouar",
        produit: "Robe Élégante",
        couleur: "Rouge, Taille M",
        quantite: 1,
        prixProduit: 4500,
        fraisLivraison: 500,
        total: 5000,
        status: "new",
        date: "2024-01-15",
        notes: "",
        unread: true
    },
    {
        id: 2,
        nom: "Fatima Zohra",
        telephone: "+213 666 789 012",
        wilaya: "Oran",
        commune: "Es Senia",
        produit: "Ensemble Chic",
        couleur: "Bleu Marine, Taille L",
        quantite: 2,
        prixProduit: 7200,
        fraisLivraison: 600,
        total: 7800,
        status: "processing",
        date: "2024-01-14",
        notes: "Client préfère livraison après-midi",
        unread: false
    },
    {
        id: 3,
        nom: "Karim Messaoudi",
        telephone: "+213 777 345 678",
        wilaya: "Constantine",
        commune: "Ali Mendjeli",
        produit: "Costume Moderne",
        couleur: "Noir, Taille XL",
        quantite: 1,
        prixProduit: 8500,
        fraisLivraison: 700,
        total: 9200,
        status: "shipped",
        date: "2024-01-13",
        notes: "",
        unread: false
    },
    {
        id: 4,
        nom: "Amina Khelifi",
        telephone: "+213 888 901 234",
        wilaya: "Annaba",
        commune: "Sidi Amar",
        produit: "Caftan Traditionnel",
        couleur: "Doré, Taille S",
        quantite: 1,
        prixProduit: 6800,
        fraisLivraison: 650,
        total: 7450,
        status: "completed",
        date: "2024-01-12",
        notes: "Très satisfaite du produit",
        unread: false
    },
    {
        id: 5,
        nom: "Youcef Brahimi",
        telephone: "+213 999 567 890",
        wilaya: "Sétif",
        commune: "El Eulma",
        produit: "Veste Casual",
        couleur: "Gris, Taille M",
        quantite: 3,
        prixProduit: 4200,
        fraisLivraison: 550,
        total: 4750,
        status: "cancelled",
        date: "2024-01-11",
        notes: "Annulé à la demande du client",
        unread: false
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    orders = [...sampleOrders];
    filteredOrders = [...orders];
    
    initializeEventListeners();
    renderOrders();
    updateStats();
    updateLanguage();
    
    // Show scroll hint on mobile
    if (window.innerWidth <= 767) {
        showScrollHint();
    }
});

// Initialize all event listeners
function initializeEventListeners() {
    // Language toggle
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    
    // User menu toggle
    document.getElementById('menuToggle').addEventListener('click', toggleUserMenu);
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Filter functionality
    document.getElementById('statusFilter').addEventListener('change', handleFilters);
    document.getElementById('dateFrom').addEventListener('change', handleFilters);
    document.getElementById('dateTo').addEventListener('change', handleFilters);
    
    // Toolbar buttons
    document.getElementById('exportBtn').addEventListener('click', exportOrders);
    document.getElementById('addTestOrderBtn').addEventListener('click', addTestOrder);
    document.getElementById('notifyCustomersBtn').addEventListener('click', notifyCustomersByStatus);
    
    // Modal functionality
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // Invoice modal buttons
    document.getElementById('callBtn').addEventListener('click', callClient);
    document.getElementById('addNotesBtn').addEventListener('click', toggleNotes);
    document.getElementById('deleteOrderBtn').addEventListener('click', showDeleteConfirmation);
    
    // Delete confirmation modal
    document.getElementById('deleteModalClose').addEventListener('click', closeDeleteModal);
    document.getElementById('deleteCancelBtn').addEventListener('click', closeDeleteModal);
    document.getElementById('deleteConfirmBtn').addEventListener('click', confirmDeleteOrder);
    document.getElementById('deleteModalOverlay').addEventListener('click', function(e) {
        if (e.target === this) closeDeleteModal();
    });
    
    // Notes functionality
    document.querySelectorAll('.quick-note-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const note = this.getAttribute('data-note');
            const textarea = document.getElementById('notesTextarea');
            textarea.value += (textarea.value ? '\n' : '') + note;
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.user-menu')) {
            document.getElementById('dropdownMenu').classList.remove('show');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 767) {
            showScrollHint();
        } else {
            hideScrollHint();
        }
    });
}

// Language functionality
function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    updateLanguage();
}

function updateLanguage() {
    const langText = document.getElementById('langText');
    langText.textContent = currentLanguage === 'fr' ? 'Français' : 'English';
    
    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-key-placeholder]').forEach(element => {
        const key = element.getAttribute('data-key-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// User menu functionality
function toggleUserMenu() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('show');
}

// Search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        filteredOrders = [...orders];
    } else {
        filteredOrders = orders.filter(order => 
            order.nom.toLowerCase().includes(searchTerm) ||
            order.telephone.toLowerCase().includes(searchTerm) ||
            order.wilaya.toLowerCase().includes(searchTerm) ||
            order.produit.toLowerCase().includes(searchTerm) ||
            order.id.toString().includes(searchTerm)
        );
    }
    
    renderOrders();
}

// Filter functionality
function handleFilters() {
    const statusFilter = document.getElementById('statusFilter').value;
    const dateFrom = document.getElementById('dateFrom').value;
    const dateTo = document.getElementById('dateTo').value;
    
    filteredOrders = orders.filter(order => {
        let matchesStatus = !statusFilter || order.status === statusFilter;
        let matchesDateFrom = !dateFrom || order.date >= dateFrom;
        let matchesDateTo = !dateTo || order.date <= dateTo;
        
        return matchesStatus && matchesDateFrom && matchesDateTo;
    });
    
    renderOrders();
}

// Render orders in the table
function renderOrders() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = '';
    
    filteredOrders.forEach(order => {
        const row = createOrderRow(order);
        tbody.appendChild(row);
    });
}

// Create a single order row
function createOrderRow(order) {
    const row = document.createElement('tr');
    if (order.unread) {
        row.classList.add('unread');
    }
    
    row.innerHTML = `
        <td class="col-id">${order.id}</td>
        <td class="col-nom truncate" title="${order.nom}">${order.nom}</td>
        <td class="col-phone">${order.telephone}</td>
        <td class="col-wilaya">${order.wilaya}</td>
        <td class="col-produit truncate" title="${order.produit}">${order.produit}</td>
        <td class="col-variants truncate" title="${order.couleur}">${order.couleur}</td>
        <td class="col-quantity">${order.quantite}</td>
        <td class="col-total">${formatCurrency(order.total)}</td>
        <td class="col-status">
            <select class="status-dropdown status-${order.status}" data-order-id="${order.id}">
                <option value="new" class="status-new" ${order.status === 'new' ? 'selected' : ''}>Nouveau</option>
                <option value="processing" class="status-processing" ${order.status === 'processing' ? 'selected' : ''}>En cours</option>
                <option value="preparation" class="status-preparation" ${order.status === 'preparation' ? 'selected' : ''}>En préparation</option>
                <option value="shipped" class="status-shipped" ${order.status === 'shipped' ? 'selected' : ''}>Expédié</option>
                <option value="completed" class="status-completed" ${order.status === 'completed' ? 'selected' : ''}>Terminé</option>
                <option value="cancelled" class="status-cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Annulé</option>
                <option value="returned" class="status-returned" ${order.status === 'returned' ? 'selected' : ''}>Retour</option>
                <option value="awaiting_exchange" class="status-awaiting-exchange" ${order.status === 'awaiting_exchange' ? 'selected' : ''}>En attente d'échange</option>
                <option value="exchange_shipped" class="status-exchange-shipped" ${order.status === 'exchange_shipped' ? 'selected' : ''}>Échange expédié</option>
                <option value="exchange_completed" class="status-exchange-completed" ${order.status === 'exchange_completed' ? 'selected' : ''}>Échange terminé</option>
                <option value="refund_processing" class="status-refund-processing" ${order.status === 'refund_processing' ? 'selected' : ''}>Remboursement en cours</option>
                <option value="dispute_open" class="status-dispute-open" ${order.status === 'dispute_open' ? 'selected' : ''}>Litige ouvert</option>
            </select>
        </td>
        <td class="col-date">${formatDate(order.date)}</td>
        <td class="col-action">
            <button class="action-btn" onclick="openOrderModal(${order.id})">
                <i class="fas fa-eye"></i>
            </button>
        </td>
    `;
    
    // Add status change listener
    const statusSelect = row.querySelector('.status-dropdown');
    statusSelect.addEventListener('change', function() {
        updateOrderStatus(order.id, this.value);
        this.className = `status-dropdown status-${this.value}`;
    });
    
    return row;
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        updateStats();
        
        // Show success message
        showNotification('Statut mis à jour avec succès', 'success');
    }
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('fr-DZ', {
        style: 'currency',
        currency: 'DZD',
        minimumFractionDigits: 0
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });
}

// Update statistics
function updateStats() {
    const stats = {
        new: orders.filter(o => o.status === 'new').length,
        processing: orders.filter(o => o.status === 'processing').length,
        shipped: orders.filter(o => o.status === 'shipped').length,
        completed: orders.filter(o => o.status === 'completed').length
    };
    
    document.getElementById('newOrdersCount').textContent = stats.new;
    document.getElementById('processingOrdersCount').textContent = stats.processing;
    document.getElementById('shippedOrdersCount').textContent = stats.shipped;
    document.getElementById('completedOrdersCount').textContent = stats.completed;
}

// Modal functionality
function openOrderModal(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    currentOrderId = orderId;
    
    // Mark as read
    order.unread = false;
    renderOrders();
    
    // Populate modal fields
    document.getElementById('produitValue').textContent = order.produit;
    document.getElementById('couleurValue').textContent = order.couleur;
    document.getElementById('quantiteValue').textContent = order.quantite;
    document.getElementById('nomValue').textContent = order.nom;
    document.getElementById('telephoneValue').textContent = order.telephone;
    document.getElementById('wilayaValue').textContent = order.wilaya;
    document.getElementById('communeValue').textContent = order.commune;
    document.getElementById('prixProduitValue').textContent = formatCurrency(order.prixProduit);
    document.getElementById('fraisLivraisonValue').textContent = formatCurrency(order.fraisLivraison);
    document.getElementById('totalValue').textContent = formatCurrency(order.total);
    document.getElementById('notesTextarea').value = order.notes || '';
    
    // Show modal
    document.getElementById('modalOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Save notes before closing
    if (currentOrderId) {
        const order = orders.find(o => o.id === currentOrderId);
        if (order) {
            order.notes = document.getElementById('notesTextarea').value;
        }
    }
    
    document.getElementById('modalOverlay').classList.remove('show');
    document.getElementById('notesSection').classList.remove('show');
    document.body.style.overflow = '';
    currentOrderId = null;
}

// Invoice modal functionality
function callClient() {
    if (currentOrderId) {
        const order = orders.find(o => o.id === currentOrderId);
        if (order) {
            // Remove any non-digit characters and format for tel: link
            const cleanPhone = order.telephone.replace(/\D/g, '');
            window.open(`tel:${cleanPhone}`, '_self');
        }
    }
}

function toggleNotes() {
    const notesSection = document.getElementById('notesSection');
    notesSection.classList.toggle('show');
}

// Delete functionality
function showDeleteConfirmation() {
    document.getElementById('deleteModalOverlay').classList.add('show');
}

function closeDeleteModal() {
    document.getElementById('deleteModalOverlay').classList.remove('show');
}

function confirmDeleteOrder() {
    if (currentOrderId) {
        // Remove order from arrays
        orders = orders.filter(o => o.id !== currentOrderId);
        filteredOrders = filteredOrders.filter(o => o.id !== currentOrderId);
        
        // Update UI
        renderOrders();
        updateStats();
        
        // Close modals
        closeDeleteModal();
        closeModal();
        
        // Show success message
        showNotification('Commande supprimée avec succès', 'success');
    }
}

// Toolbar functionality
function exportOrders() {
    // Create CSV content
    const headers = ['ID', 'Nom', 'Téléphone', 'Wilaya', 'Commune', 'Produit', 'Variantes', 'Quantité', 'Prix Produit', 'Frais Livraison', 'Total', 'Statut', 'Date', 'Notes'];
    const csvContent = [
        headers.join(','),
        ...filteredOrders.map(order => [
            order.id,
            `"${order.nom}"`,
            `"${order.telephone}"`,
            `"${order.wilaya}"`,
            `"${order.commune}"`,
            `"${order.produit}"`,
            `"${order.couleur}"`,
            order.quantite,
            order.prixProduit,
            order.fraisLivraison,
            order.total,
            `"${order.status}"`,
            order.date,
            `"${order.notes || ''}"`
        ].join(','))
    ].join('\n');
    
    // Download CSV
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `commandes_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Export terminé avec succès', 'success');
}

function addTestOrder() {
    const newOrder = {
        id: Math.max(...orders.map(o => o.id)) + 1,
        nom: "Test Client",
        telephone: "+213 555 000 000",
        wilaya: "Alger",
        commune: "Centre",
        produit: "Produit Test",
        couleur: "Test, Taille M",
        quantite: 1,
        prixProduit: 3000,
        fraisLivraison: 500,
        total: 3500,
        status: "new",
        date: new Date().toISOString().split('T')[0],
        notes: "Commande de test",
        unread: true
    };
    
    orders.unshift(newOrder);
    filteredOrders = [...orders];
    renderOrders();
    updateStats();
    
    showNotification('Commande test ajoutée avec succès', 'success');
}

function notifyCustomersByStatus() {
    // This function would handle bulk customer notifications
    // For now, we'll show a placeholder message
    showNotification('Fonctionnalité de notification en cours de développement', 'info');
}

// Scroll hint functionality
function showScrollHint() {
    const hint = document.getElementById('scrollHint');
    if (hint) {
        hint.classList.add('show');
        setTimeout(() => {
            hint.classList.remove('show');
        }, 3000);
    }
}

function hideScrollHint() {
    const hint = document.getElementById('scrollHint');
    if (hint) {
        hint.classList.remove('show');
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-width: 300px;
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                border-left: 4px solid;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-success {
                border-left-color: #10b981;
            }
            .notification-error {
                border-left-color: #ef4444;
            }
            .notification-info {
                border-left-color: #3b82f6;
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .notification-content i {
                font-size: 1.125rem;
            }
            .notification-success .notification-content i {
                color: #10b981;
            }
            .notification-error .notification-content i {
                color: #ef4444;
            }
            .notification-info .notification-content i {
                color: #3b82f6;
            }
            .notification-close {
                background: none;
                border: none;
                cursor: pointer;
                color: #6b7280;
                padding: 0.25rem;
                border-radius: 4px;
                transition: background-color 0.2s;
            }
            .notification-close:hover {
                background: #f3f4f6;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Manual close
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}
