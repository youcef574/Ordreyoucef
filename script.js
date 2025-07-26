// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'fr';
        this.translations = {
            fr: {
                // Header
                dashboard: 'Tableau de bord',
                settings: 'Paramètres',
                logout: 'Déconnexion',
                
                // Page Title
                pageTitle: 'Gestion des Commandes',
                
                // Stats
                newOrders: 'Nouvelles',
                processing: 'En cours',
                shipped: 'Expédiées',
                completed: 'Terminées',
                
                // Toolbar
                searchPlaceholder: 'Rechercher par nom, téléphone ou numéro de commande...',
                allStatuses: 'Tous les statuts',
                new: 'Nouveau',
                cancelled: 'Annulé',
                to: 'à',
                export: 'Exporter',
                addTestOrder: 'Commande test',
                
                // Table Headers
                id: 'id',
                nom: 'Nom',
                phone: 'Téléphone',
                wilaya: 'Wilaya',
                produit: 'produit',
                variants: 'Variantes',
                quantity: 'Qté',
                total: 'Total',
                date: 'Date',
                status: 'Statut',
                action: 'action',
                
                // Status Options
                statusNew: 'Nouveau',
                statusProcessing: 'En cours',
                statusPreparation: 'En préparation',
                statusShipped: 'Expédié',
                statusCompleted: 'Terminé',
                statusCancelled: 'Annulé',
                statusReturned: 'Retour',
                statusAwaitingExchange: 'En attente d\'échange',
                statusExchangeShipped: 'Échange expédié',
                statusExchangeCompleted: 'Échange terminé',
                statusRefundProcessing: 'Remboursement en cours',
                statusDisputeOpen: 'Litige ouvert',
                
                // Modal
                invoiceTitle: 'Facture de clients',
                produit: 'Produit',
                variantes: 'Variantes',
                quantite: 'Quantité',
                nom: 'Nom',
                telephone: 'Téléphone',
                wilaya: 'Wilaya',
                commune: 'Commune',
                prixProduit: 'Prix produit',
                fraisLivraison: 'Frais de livraison',
                total: 'Total',
                callClient: '📞 Appeler le client',
                memos: '📝 Mémos / Notes',
                noAnswer: '❌ N\'a pas répondu',
                called: '☎ Appelé avec succès',
                callLater: '⏳ Rappeler plus tard',
                deleteOrder: 'Supprimer',
                
                // Actions
                details: 'Détails',
                
                // Messages
                orderCopied: 'Informations de la commande copiées !',
                noteAdded: 'Note ajoutée avec succès !',
                statusUpdated: 'Statut mis à jour !',
                testOrderAdded: 'Commande test ajoutée !',
                
                // WhatsApp Modal
                whatsappNotification: 'Notification WhatsApp',
                whatsappQuestion: 'Voulez-vous notifier le client via WhatsApp du changement de statut ?',
                sendWhatsApp: 'Envoyer WhatsApp',
                cancel: 'Annuler',
                
                // Delete confirmation
                confirmDelete: 'Confirmer la suppression',
                deleteWarning: 'Êtes-vous sûr de vouloir supprimer cette commande ? Cette action ne peut pas être annulée.',
                confirmDeleteBtn: 'Supprimer',
                
                // New Action Buttons
                orderDeleted: 'تم حذف الطلبية بنجاح',
                invoiceTitleShort: 'Facture',
                customer: 'Client',
                orderNumber: 'N° Commande',
                thankYou: 'Merci pour votre confiance'
            },
            en: {
                // Header
                dashboard: 'Dashboard',
                settings: 'Settings',
                logout: 'Logout',
                
                // Page Title
                pageTitle: 'Orders Management',
                
                // Stats
                newOrders: 'New',
                processing: 'Processing',
                shipped: 'Shipped',
                completed: 'Completed',
                
                // Toolbar
                searchPlaceholder: 'Search by name, phone or order number...',
                allStatuses: 'All statuses',
                new: 'New',
                cancelled: 'Cancelled',
                to: 'to',
                export: 'Export',
                addTestOrder: 'Test order',
                
                // Table Headers
                id: 'id',
                nom: 'Name',
                phone: 'Phone',
                wilaya: 'Wilaya',
                produit: 'product',
                variants: 'Variants',
                quantity: 'Qty',
                total: 'Total',
                date: 'Date',
                status: 'Status',
                action: 'action',
                
                // Status Options
                statusNew: 'New',
                statusProcessing: 'In progress',
                statusPreparation: 'In preparation',
                statusShipped: 'Shipped',
                statusCompleted: 'Completed',
                statusCancelled: 'Cancelled',
                statusReturned: 'Returned',
                statusAwaitingExchange: 'Awaiting exchange',
                statusExchangeShipped: 'Exchange shipped',
                statusExchangeCompleted: 'Exchange completed',
                statusRefundProcessing: 'Refund in progress',
                statusDisputeOpen: 'Dispute opened',
                
                // Modal
                invoiceTitle: 'Invoice',
                produit: 'Product',
                variantes: 'Variants',
                quantite: 'Quantity',
                nom: 'Name',
                telephone: 'Phone',
                wilaya: 'Wilaya',
                commune: 'City',
                prixProduit: 'Product price',
                fraisLivraison: 'Delivery fees',
                total: 'Total',
                callClient: '📞 Call client',
                memos: '📝 Memos / Notes',
                noAnswer: '❌ No answer',
                called: '☎ Called successfully',
                callLater: '⏳ Call back later',
                deleteOrder: 'Delete',
                
                // Actions
                details: 'Details',
                
                // Messages
                orderCopied: 'Order information copied!',
                noteAdded: 'Note added successfully!',
                statusUpdated: 'Status updated!',
                testOrderAdded: 'Test order added!',
                
                // WhatsApp Modal
                whatsappNotification: 'WhatsApp Notification',
                whatsappQuestion: 'Would you like to notify the customer via WhatsApp about the status change?',
                sendWhatsApp: 'Send WhatsApp',
                cancel: 'Cancel',
                
                // Delete confirmation
                confirmDelete: 'Confirm Delete',
                deleteWarning: 'Are you sure you want to delete this order? This action cannot be undone.',
                confirmDeleteBtn: 'Delete Order',
                
                // New Action Buttons
                orderDeleted: 'Order deleted successfully',
                invoiceTitleShort: 'Invoice',
                customer: 'Customer',
                orderNumber: 'Order Number',
                thankYou: 'Thank you for your trust'
            }
        };
        
        this.init();
    }
    
    init() {
        this.updateLanguageDisplay();
        this.translatePage();
        
        // Language toggle event
        document.getElementById('langToggle').addEventListener('click', () => {
            this.toggleLanguage();
        });
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('language', this.currentLang);
        this.updateLanguageDisplay();
        this.translatePage();
        
        // Update table headers
        this.updateTableHeaders();
        
        // Update status dropdowns
        this.updateStatusDropdowns();
        
        // Update modal if open
        if (window.ordersManager && window.ordersManager.currentOrder) {
            window.ordersManager.populateModal(window.ordersManager.currentOrder);
        }
    }
    
    updateLanguageDisplay() {
        const langText = document.getElementById('langText');
        langText.textContent = this.currentLang === 'fr' ? 'Français' : 'English';
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (this.translations[this.currentLang][key]) {
                element.textContent = this.translations[this.currentLang][key];
            }
        });
        
        // Translate placeholders
        const placeholderElements = document.querySelectorAll('[data-key-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-key-placeholder');
            if (this.translations[this.currentLang][key]) {
                element.placeholder = this.translations[this.currentLang][key];
            }
        });
    }
    
    updateTableHeaders() {
        const headers = document.querySelectorAll('.orders-table th');
        const headerKeys = ['id', 'nom', 'phone', 'wilaya', 'produit', 'variants', 'quantity', 'total', 'status', 'date', 'action'];
        
        headers.forEach((header, index) => {
            if (headerKeys[index] && this.translations[this.currentLang][headerKeys[index]]) {
                header.textContent = this.translations[this.currentLang][headerKeys[index]];
            }
        });
    }
    
    updateStatusDropdowns() {
        // Update all status dropdown options
        document.querySelectorAll('.status-dropdown').forEach(select => {
            Array.from(select.options).forEach(option => {
                const key = option.getAttribute('data-key');
                if (key && this.translations[this.currentLang][key]) {
                    option.textContent = this.translations[this.currentLang][key];
                }
            });
        });
    }
    
    t(key) {
        return this.translations[this.currentLang][key] || key;
    }
}

// Orders Management System
class OrdersManager {
    constructor() {
        this.orders = this.loadOrders();
        this.filteredOrders = [...this.orders];
        this.currentOrder = null;
        this.currentOrderForWhatsApp = null;
        
        this.init();
    }
    
    init() {
        this.renderOrders();
        this.updateStats();
        this.bindEvents();
        this.initModal();
        this.initWhatsAppModal();
    }
    
    loadOrders() {
        const saved = localStorage.getItem('orders');
        if (saved) {
            return JSON.parse(saved);
        }
        return this.generateSampleOrders();
    }
    
    saveOrders() {
        localStorage.setItem('orders', JSON.stringify(this.orders));
    }
    
    generateSampleOrders() {
        const sampleOrders = [
            {
                id: '1',
                customerName: 'Marie',
                phone: '+33 6 12 34 56 78',
                wilaya: 'Paris',
                city: 'Paris',
                product: 'Collier Élégance',
                variants: 'Or rose, 45cm',
                quantity: 1,
                total: 89.99,
                customerNotes: 'Livraison rapide s\'il vous plaît',
                sellerNotes: '',
                date: new Date(Date.now() - 86400000).toISOString(),
                status: 'new',
                isRead: false
            },
            {
                id: '2',
                customerName: 'Jean',
                phone: '+33 6 98 76 54 32',
                wilaya: 'Rhône',
                city: 'Lyon',
                product: 'Bague Diamant',
                variants: 'Argent, Taille 56',
                quantity: 1,
                total: 159.99,
                customerNotes: '',
                sellerNotes: '☎ Appelé avec succès',
                date: new Date(Date.now() - 172800000).toISOString(),
                status: 'processing',
                isRead: true
            }
        ];
        return sampleOrders;
    }
    
    bindEvents() {
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterOrders();
        });
        
        document.getElementById('statusFilter').addEventListener('change', () => {
            this.filterOrders();
        });
        
        document.getElementById('dateFrom').addEventListener('change', () => {
            this.filterOrders();
        });
        
        document.getElementById('dateTo').addEventListener('change', () => {
            this.filterOrders();
        });
        
        document.getElementById('addTestOrderBtn').addEventListener('click', () => {
            this.addTestOrder();
        });
        
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportOrders();
        });
        
        document.getElementById('menuToggle').addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = document.getElementById('dropdownMenu');
            dropdown.classList.toggle('show');
        });
        
        document.addEventListener('click', () => {
            const dropdown = document.getElementById('dropdownMenu');
            dropdown.classList.remove('show');
        });
    }
    
    filterOrders() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const statusFilter = document.getElementById('statusFilter').value;
        const dateFrom = document.getElementById('dateFrom').value;
        const dateTo = document.getElementById('dateTo').value;
        
        this.filteredOrders = this.orders.filter(order => {
            const matchesSearch = !searchTerm || 
                order.customerName.toLowerCase().includes(searchTerm) ||
                order.phone.includes(searchTerm) ||
                order.id.toLowerCase().includes(searchTerm) ||
                order.product.toLowerCase().includes(searchTerm) ||
                order.wilaya.toLowerCase().includes(searchTerm) ||
                order.city.toLowerCase().includes(searchTerm);
            
            const matchesStatus = !statusFilter || order.status === statusFilter;
            
            const orderDate = new Date(order.date).toISOString().split('T')[0];
            const matchesDateFrom = !dateFrom || orderDate >= dateFrom;
            const matchesDateTo = !dateTo || orderDate <= dateTo;
            
            return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo;
        });
        
        this.renderOrders();
        this.updateSearchResults();
    }
    
    updateSearchResults() {
        const searchInput = document.getElementById('searchInput');
        const resultCount = this.filteredOrders.length;
        
        if (searchInput.value.trim()) {
            searchInput.setAttribute('data-results', `${resultCount} résultat${resultCount > 1 ? 's' : ''}`);
        } else {
            searchInput.removeAttribute('data-results');
        }
    }
    
    getStatusClass(status) {
        const statusClasses = {
            'new': 'status-new',
            'processing': 'status-processing',
            'preparation': 'status-preparation',
            'shipped': 'status-shipped',
            'completed': 'status-completed',
            'cancelled': 'status-cancelled',
            'returned': 'status-returned',
            'awaiting_exchange': 'status-awaiting-exchange',
            'exchange_shipped': 'status-exchange-shipped',
            'exchange_completed': 'status-exchange-completed',
            'refund_processing': 'status-refund-processing',
            'dispute_open': 'status-dispute-open'
        };
        return statusClasses[status] || 'status-new';
    }
    
    createStatusDropdown(order) {
        const select = document.createElement('select');
        select.className = 'status-dropdown';
        select.setAttribute('data-order-id', order.id);
        
        const statuses = [
            { value: 'new', key: 'statusNew' },
            { value: 'processing', key: 'statusProcessing' },
            { value: 'preparation', key: 'statusPreparation' },
            { value: 'shipped', key: 'statusShipped' },
            { value: 'completed', key: 'statusCompleted' },
            { value: 'cancelled', key: 'statusCancelled' },
            { value: 'returned', key: 'statusReturned' },
            { value: 'awaiting_exchange', key: 'statusAwaitingExchange' },
            { value: 'exchange_shipped', key: 'statusExchangeShipped' },
            { value: 'exchange_completed', key: 'statusExchangeCompleted' },
            { value: 'refund_processing', key: 'statusRefundProcessing' },
            { value: 'dispute_open', key: 'statusDisputeOpen' }
        ];
        
        statuses.forEach(status => {
            const option = document.createElement('option');
            option.value = status.value;
            option.setAttribute('data-key', status.key);
            option.textContent = window.langManager.t(status.key);
            option.className = this.getStatusClass(status.value);
            if (order.status === status.value) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        
        select.addEventListener('change', (e) => {
            this.updateOrderStatus(order.id, e.target.value);
        });
        
        select.className += ` ${this.getStatusClass(order.status)}`;
        
        return select;
    }
    
    updateOrderStatus(orderId, newStatus) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;
        
        order.status = newStatus;
        this.saveOrders();
        this.updateStats();
        this.currentOrderForWhatsApp = order;
        this.showWhatsAppModal();
        this.showNotification(window.langManager.t('statusUpdated'));
        this.renderOrders();
    }
    
    renderOrders() {
        const tbody = document.getElementById('ordersTableBody');
        tbody.innerHTML = '';
        
        if (this.filteredOrders.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="11" style="text-align: center; padding: 2rem; color: var(--text-gray);">
                        Aucune commande trouvée
                    </td>
                </tr>
            `;
            return;
        }
        
        this.filteredOrders.forEach((order, index) => {
            const row = document.createElement('tr');
            if (!order.isRead) {
                row.classList.add('unread');
            }
            
            const firstName = order.customerName.split(' ')[0];
            const statusDropdown = this.createStatusDropdown(order);
            
            row.innerHTML = `
                <td class="col-id"><strong>${index + 1}</strong></td>
                <td class="col-nom truncate" title="${order.customerName}">${firstName}</td>
                <td class="col-phone">${order.phone}</td>
                <td class="col-wilaya truncate" title="${order.wilaya}, ${order.city}">${order.wilaya}</td>
                <td class="col-produit truncate" title="${order.product}">${order.product}</td>
                <td class="col-variants truncate" title="${order.variants}">${order.variants}</td>
                <td class="col-quantity">${order.quantity}</td>
                <td class="col-total">€${order.total.toFixed(2)}</td>
                <td class="col-status"></td>
                <td class="col-date">${this.formatDate(order.date)}</td>
                <td class="col-action">
                    <button class="action-btn" onclick="ordersManager.openOrderModal('${order.id}')">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            `;
            
            row.querySelector('.col-status').appendChild(statusDropdown);
            
            row.addEventListener('click', (e) => {
                if (!e.target.closest('.action-btn') && !e.target.closest('.status-dropdown')) {
                    this.openOrderModal(order.id);
                }
            });
            
            tbody.appendChild(row);
        });
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString(window.langManager.currentLang === 'fr' ? 'fr-FR' : 'en-US');
    }
    
    updateStats() {
        const stats = {
            new: this.orders.filter(o => o.status === 'new').length,
            processing: this.orders.filter(o => o.status === 'processing' || o.status === 'preparation').length,
            shipped: this.orders.filter(o => o.status === 'shipped' || o.status === 'exchange_shipped').length,
            completed: this.orders.filter(o => o.status === 'completed' || o.status === 'exchange_completed').length
        };
        
        document.getElementById('newOrdersCount').textContent = stats.new;
        document.getElementById('processingOrdersCount').textContent = stats.processing;
        document.getElementById('shippedOrdersCount').textContent = stats.shipped;
        document.getElementById('completedOrdersCount').textContent = stats.completed;
    }
    
    addTestOrder() {
        const testOrder = {
            id: String(this.orders.length + 1),
            customerName: 'Client Test Nom',
            phone: '+33 6 00 00 00 00',
            wilaya: 'Alger',
            city: 'Alger Centre',
            product: 'Produit Test',
            variants: 'Variante Test',
            quantity: 1,
            total: 99.99,
            customerNotes: 'Commande de test',
            sellerNotes: '',
            date: new Date().toISOString(),
            status: 'new',
            isRead: false
        };
        
        this.orders.unshift(testOrder);
        this.filteredOrders = [...this.orders];
        this.saveOrders();
        this.renderOrders();
        this.updateStats();
        this.showNotification(window.langManager.t('testOrderAdded'));
    }
    
    exportOrders() {
        const csvContent = this.generateCSV();
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `orders_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
    
    generateCSV() {
        const headers = [
            'N°', 'Customer Name', 'Phone', 'Wilaya', 'City', 'Product', 
            'Variants', 'Quantity', 'Total', 'Status', 'Date', 'Customer Notes', 'Seller Notes'
        ];
        
        const rows = this.filteredOrders.map(order => [
            order.id,
            order.customerName,
            order.phone,
            order.wilaya,
            order.city,
            order.product,
            order.variants,
            order.quantity,
            order.total,
            order.status,
            this.formatDate(order.date),
            order.customerNotes,
            order.sellerNotes
        ]);
        
        return [headers, ...rows].map(row => 
            row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')
        ).join('\n');
    }
    
    initModal() {
        const modal = document.getElementById('modalOverlay');
        const closeBtn = document.getElementById('modalClose');
        
        closeBtn.addEventListener('click', () => this.closeModal());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                this.closeModal();
            }
        });
        
        document.getElementById('callBtn').addEventListener('click', () => {
            this.callCustomer();
        });
        
        document.getElementById('addNotesBtn').addEventListener('click', () => {
            this.toggleNotesSection();
        });
        
        document.getElementById('deleteOrderBtn').addEventListener('click', () => {
            this.showDeleteConfirmation();
        });
        
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-note-btn')) {
                const note = e.target.getAttribute('data-note');
                this.addQuickNote(note);
            }
        });
        
        document.getElementById('notesTextarea').addEventListener('input', 
            this.debounce(() => this.saveSellerNotes(), 1000)
        );
        
        this.initDeleteModal();
    }
    
    initDeleteModal() {
        const modal = document.getElementById('deleteModalOverlay');
        const closeBtn = document.getElementById('deleteModalClose');
        const cancelBtn = document.getElementById('deleteCancelBtn');
        const confirmBtn = document.getElementById('deleteConfirmBtn');
        
        if (closeBtn) closeBtn.addEventListener('click', () => this.closeDeleteModal());
        if (cancelBtn) cancelBtn.addEventListener('click', () => this.closeDeleteModal());
        if (confirmBtn) confirmBtn.addEventListener('click', () => this.confirmDeleteOrder());
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeDeleteModal();
            });
        }
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
                this.closeDeleteModal();
            }
        });
    }
    
    initWhatsAppModal() {
        const modal = document.getElementById('whatsappModalOverlay');
        const closeBtn = document.getElementById('whatsappModalClose');
        const cancelBtn = document.getElementById('whatsappCancelBtn');
        const sendBtn = document.getElementById('whatsappSendBtn');
        
        if (closeBtn) closeBtn.addEventListener('click', () => this.closeWhatsAppModal());
        if (cancelBtn) cancelBtn.addEventListener('click', () => this.closeWhatsAppModal());
        if (sendBtn) sendBtn.addEventListener('click', () => this.sendWhatsAppNotification());
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeWhatsAppModal();
            });
        }
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
                this.closeWhatsAppModal();
            }
        });
    }
    
        showWhatsAppModal() {
        const modal = document.getElementById('whatsappModalOverlay');
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }

    closeWhatsAppModal() {
        const modal = document.getElementById('whatsappModalOverlay');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
        this.currentOrderForWhatsApp = null;
    }

    sendWhatsAppNotification() {
        if (!this.currentOrderForWhatsApp) return;

        const order = this.currentOrderForWhatsApp;
        const lang = window.langManager.currentLang;

        const statusMessages = {
            new: {
                fr: 'Votre commande a été reçue et est en cours de traitement.',
                en: 'Your order has been received and is being processed.'
            },
            processing: {
                fr: 'Votre commande est actuellement en cours de préparation.',
                en: 'Your order is currently being prepared.'
            },
            shipped: {
                fr: 'Bonne nouvelle ! Votre commande a été expédiée.',
                en: 'Good news! Your order has been shipped.'
            },
            completed: {
                fr: 'Votre commande a été livrée avec succès.',
                en: 'Your order has been successfully delivered.'
            }
        };

        const message = `${window.langManager.t('statusUpdated')} - ${order.product} (#${order.id})`;
        const phoneNumber = order.phone.replace(/\s/g, '').replace(/\+/g, '');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
        this.closeWhatsAppModal();
    }

    showDeleteConfirmation() {
        const modal = document.getElementById('deleteModalOverlay');
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }

    closeDeleteModal() {
        const modal = document.getElementById('deleteModalOverlay');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    confirmDeleteOrder() {
        if (!this.currentOrder) return;

        this.orders = this.orders.filter(order => order.id !== this.currentOrder.id);
        this.filteredOrders = this.filteredOrders.filter(order => order.id !== this.currentOrder.id);

        this.saveOrders();
        this.renderOrders();
        this.updateStats();

        this.closeDeleteModal();
        this.closeModal();

        this.showNotification(window.langManager.t('orderDeleted'));
    }

    openOrderModal(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;

        this.currentOrder = order;

        if (!order.isRead) {
            order.isRead = true;
            this.saveOrders();
            this.renderOrders();
        }

        this.populateModal(order);

        const modal = document.getElementById('modalOverlay');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('modalOverlay');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        this.currentOrder = null;
    }

    populateModal(order) {
        document.getElementById('produitValue').textContent = order.product;
        document.getElementById('couleurValue').textContent = order.variants;
        document.getElementById('quantiteValue').textContent = order.quantity;
        document.getElementById('nomValue').textContent = order.customerName;
        document.getElementById('telephoneValue').textContent = order.phone;
        document.getElementById('wilayaValue').textContent = order.wilaya;
        document.getElementById('communeValue').textContent = order.city;

        const productPrice = order.total * 0.9;
        const deliveryFee = order.total * 0.1;

        document.getElementById('prixProduitValue').textContent = `€${productPrice.toFixed(2)}`;
        document.getElementById('fraisLivraisonValue').textContent = `€${deliveryFee.toFixed(2)}`;
        document.getElementById('totalValue').textContent = `€${order.total.toFixed(2)}`;

        document.getElementById('notesTextarea').value = order.sellerNotes || '';
    }

    callCustomer() {
        if (!this.currentOrder) return;
        const phoneNumber = this.currentOrder.phone.replace(/\s/g, '');
        window.open(`tel:${phoneNumber}`, '_self');
    }

    toggleNotesSection() {
        const notesSection = document.getElementById('notesSection');
        notesSection.classList.toggle('show');
    }

    addQuickNote(note) {
        const textarea = document.getElementById('notesTextarea');
        const currentNotes = textarea.value;
        textarea.value = currentNotes ? `${currentNotes}\n${note}` : note;
        this.saveSellerNotes();
        this.showNotification(window.langManager.t('noteAdded'));
    }

    saveSellerNotes() {
        if (!this.currentOrder) return;
        const notes = document.getElementById('notesTextarea').value;
        this.currentOrder.sellerNotes = notes;
        this.saveOrders();
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--purple);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 3000;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        `;

        document.body.appendChild(notification);
        setTimeout(() => notification.style.transform = 'translateX(0)', 100);
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }

    debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    window.langManager = new LanguageManager();
    window.ordersManager = new OrdersManager();
});
