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
                downloadImage: 'Image',
                downloadForm: 'Formulaire',
                
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
                imageDownloaded: 'تم تحميل الصورة',
                formDownloaded: 'تم تحميل الاستمارة'
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
                Variantes: 'variable',   
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
                downloadImage: 'Image',
                downloadForm: 'Form',
                
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
                imageDownloaded: 'Image downloaded',
                formDownloaded: 'Form downloaded'
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
        // Load from localStorage or return sample data
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
            },
            {
                id: '3',
                customerName: 'Sophie',
                phone: '+33 6 11 22 33 44',
                wilaya: 'Bouches-du-Rhône',
                city: 'Marseille',
                product: 'Bracelet Charme',
                variants: 'Or blanc, 18cm',
                quantity: 2,
                total: 199.98,
                customerNotes: 'Cadeau d\'anniversaire',
                sellerNotes: '',
                date: new Date(Date.now() - 259200000).toISOString(),
                status: 'shipped',
                isRead: true
            }
        ];
        
        return sampleOrders;
    }
    
    bindEvents() {
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterOrders();
        });
        
        // Status filter
        document.getElementById('statusFilter').addEventListener('change', () => {
            this.filterOrders();
        });
        
        // Date filters
        document.getElementById('dateFrom').addEventListener('change', () => {
            this.filterOrders();
        });
        
        document.getElementById('dateTo').addEventListener('change', () => {
            this.filterOrders();
        });
        
        // Add test order
        document.getElementById('addTestOrderBtn').addEventListener('click', () => {
            this.addTestOrder();
        });
        
        // Export functionality
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportOrders();
        });
        
        // User menu toggle
        document.getElementById('menuToggle').addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = document.getElementById('dropdownMenu');
            dropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
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
            // Search filter
            const matchesSearch = !searchTerm || 
                order.customerName.toLowerCase().includes(searchTerm) ||
                order.phone.includes(searchTerm) ||
                order.id.toLowerCase().includes(searchTerm) ||
                order.product.toLowerCase().includes(searchTerm) ||
                order.wilaya.toLowerCase().includes(searchTerm) ||
                order.city.toLowerCase().includes(searchTerm);
            
            // Status filter
            const matchesStatus = !statusFilter || order.status === statusFilter;
            
            // Date filter
            const orderDate = new Date(order.date).toISOString().split('T')[0];
            const matchesDateFrom = !dateFrom || orderDate >= dateFrom;
            const matchesDateTo = !dateTo || orderDate <= dateTo;
            
            return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo;
        });
        
        this.renderOrders();
        
        // Add search result count
        this.updateSearchResults();
    }
    
    updateSearchResults() {
        const searchInput = document.getElementById('searchInput');
        const resultCount = this.filteredOrders.length;
        const totalCount = this.orders.length;
        
        // Update placeholder to show results
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
        
        // Add change event listener
        select.addEventListener('change', (e) => {
            this.updateOrderStatus(order.id, e.target.value);
        });
        
        select.className += ` ${this.getStatusClass(order.status)}`;
        
        return select;
    }
    
    updateOrderStatus(orderId, newStatus) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;
        
        const oldStatus = order.status;
        order.status = newStatus;
        
        // Save to localStorage
        this.saveOrders();
        
        // Update stats
        this.updateStats();
        
        // Show WhatsApp modal
        this.currentOrderForWhatsApp = order;
        this.showWhatsAppModal();
        
        // Show notification
        this.showNotification(window.langManager.t('statusUpdated'));
        
        // Re-render to update dropdown styling
        this.renderOrders();
    }
    
    renderOrders() {
        const tbody = document.getElementById('ordersTableBody');
        tbody.innerHTML = '';
        
        if (this.filteredOrders.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="11" style="text-align: center; padding: 2rem; color: var(--text-gray);">
                        ${window.langManager.t('noOrdersFound') || 'Aucune commande trouvée'}
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
            
            // Extract first name only
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
            
            // Add status dropdown to the status column
            row.querySelector('.col-status').appendChild(statusDropdown);
            
            // Add click event to row (except on dropdown and action button)
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
        
        // Close modal events
        closeBtn.addEventListener('click', () => this.closeModal());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                this.closeModal();
            }
        });
        
        // Modal action buttons
        document.getElementById('callBtn').addEventListener('click', () => {
            this.callCustomer();
        });
        
        document.getElementById('addNotesBtn').addEventListener('click', () => {
            this.toggleNotesSection();
        });
        
        // New action buttons
        document.getElementById('deleteOrderBtn').addEventListener('click', () => {
            this.showDeleteConfirmation();
        });
        
        document.getElementById('downloadImageBtn').addEventListener('click', () => {
            this.downloadOrderImage();
        });
        
        document.getElementById('downloadFormBtn').addEventListener('click', () => {
            this.downloadOrderForm();
        });
        
        // Quick notes buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-note-btn')) {
                const note = e.target.getAttribute('data-note');
                this.addQuickNote(note);
            }
        });
        
        // Auto-save seller notes
        document.getElementById('notesTextarea').addEventListener('input', 
            this.debounce(() => this.saveSellerNotes(), 1000)
        );
        
        // Delete confirmation modal
        this.initDeleteModal();
    }
    
    initDeleteModal() {
        const modal = document.getElementById('deleteModalOverlay');
        const closeBtn = document.getElementById('deleteModalClose');
        const cancelBtn = document.getElementById('deleteCancelBtn');
        const confirmBtn = document.getElementById('deleteConfirmBtn');
        
        // Close modal events
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeDeleteModal());
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.closeDeleteModal());
        }
        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => this.confirmDeleteOrder());
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeDeleteModal();
            });
        }
        
        // Escape key to close
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
        
        // Close modal events
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeWhatsAppModal());
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.closeWhatsAppModal());
        }
        if (sendBtn) {
            sendBtn.addEventListener('click', () => this.sendWhatsAppNotification());
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeWhatsAppModal();
            });
        }
        
        // Escape key to close
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
        
        // Generate WhatsApp message
        const message = this.generateWhatsAppMessage(order, order.status);
        const phoneNumber = order.phone.replace(/\s/g, '').replace(/\+/g, '');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Close modal
        this.closeWhatsAppModal();
    }
    
    generateWhatsAppMessage(order, newStatus) {
        const statusMessages = {
            fr: {
                new: 'Votre commande a été reçue et est en cours de traitement.',
                processing: 'Votre commande est actuellement en cours de préparation.',
                preparation: 'Votre commande est en cours de préparation et sera bientôt expédiée.',
                shipped: 'Bonne nouvelle ! Votre commande a été expédiée et est en route.',
                completed: 'Votre commande a été livrée avec succès. Merci pour votre achat !',
                cancelled: 'Nous regrettons de vous informer que votre commande a été annulée.',
                returned: 'Votre retour a été traité.',
                awaiting_exchange: 'Votre demande d\'échange est en attente de traitement.',
                exchange_shipped: 'Votre échange a été expédié.',
                exchange_completed: 'Votre échange a été complété avec succès.',
                refund_processing: 'Votre remboursement est en cours de traitement.',
                dispute_open: 'Un litige a été ouvert concernant votre commande.'
            },
            en: {
                new: 'Your order has been received and is being processed.',
                processing: 'Your order is currently being prepared.',
                preparation: 'Your order is being prepared and will be shipped soon.',
                shipped: 'Good news! Your order has been shipped and is on its way.',
                completed: 'Your order has been successfully delivered. Thank you for your purchase!',
                cancelled: 'We regret to inform you that your order has been cancelled.',
                returned: 'Your return has been processed.',
                awaiting_exchange: 'Your exchange request is awaiting processing.',
                exchange_shipped: 'Your exchange has been shipped.',
                exchange_completed: 'Your exchange has been completed successfully.',
                refund_processing: 'Your refund is being processed.',
                dispute_open: 'A dispute has been opened regarding your order.'
            }
        };
        
        const lang = window.langManager.currentLang;
        const statusMessage = statusMessages[lang][newStatus] || statusMessages[lang]['new'];
        
        const greeting = lang === 'fr' ? 
            `Bonjour ${order.customerName},` : 
            `Hello ${order.customerName},`;
        
        const orderInfo = lang === 'fr' ? 
            `\n\nCommande: ${order.product}\nNuméro: #${order.id}` :
            `\n\nOrder: ${order.product}\nNumber: #${order.id}`;
        
        const signature = lang === 'fr' ? 
            '\n\nCordialement,\nYouzinElegancia' :
            '\n\nBest regards,\nYouzinElegancia';
        
        return `${greeting}\n\n${statusMessage}${orderInfo}${signature}`;
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
        
        // Remove order from array
        this.orders = this.orders.filter(order => order.id !== this.currentOrder.id);
        this.filteredOrders = this.filteredOrders.filter(order => order.id !== this.currentOrder.id);
        
        // Save to localStorage
        this.saveOrders();
        
        // Update UI
        this.renderOrders();
        this.updateStats();
        
        // Close modals
        this.closeDeleteModal();
        this.closeModal();
        
        // Show notification
        this.showNotification(window.langManager.t('orderDeleted'));
    }
    
    downloadOrderImage() {
        if (!this.currentOrder) return;
        
        // Create a canvas to capture the modal content
        const modal = document.querySelector('.invoice-modal');
        
        // Use html2canvas library (we'll add it via CDN)
        if (typeof html2canvas !== 'undefined') {
            html2canvas(modal, {
                backgroundColor: '#ffffff',
                scale: 2,
                useCORS: true,
                allowTaint: true
            }).then(canvas => {
                // Create download link
                const link = document.createElement('a');
                link.download = `order_${this.currentOrder.id}_${new Date().toISOString().split('T')[0]}.png`;
                link.href = canvas.toDataURL();
                link.click();
                
                this.showNotification(window.langManager.t('imageDownloaded'));
            }).catch(error => {
                console.error('Error generating image:', error);
                // Fallback: simple screenshot notification
                this.showNotification('يرجى استخدام أدوات لقطة الشاشة في المتصفح');
            });
        } else {
            // Fallback method
            this.showNotification('يرجى استخدام أدوات لقطة الشاشة في المتصفح');
        }
    }
    
    downloadOrderForm() {
        if (!this.currentOrder) return;
        
        // Generate professional PDF form
        this.generateProfessionalPDF();
    }
    
    generateProfessionalPDF() {
        const order = this.currentOrder;
        
        // Create a new window with the professional form
        const printWindow = window.open('', '_blank');
        
        const formHTML = `
            <!DOCTYPE html>
            <html dir="rtl" lang="ar">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>استمارة طلبية - ${order.id}</title>
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body { 
                        font-family: 'Arial', sans-serif; 
                        background: white; 
                        color: #333; 
                        line-height: 1.6;
                        padding: 20px;
                    }
                    .form-container {
                        max-width: 800px;
                        margin: 0 auto;
                        background: white;
                        border: 2px solid #8b5cf6;
                        border-radius: 15px;
                        overflow: hidden;
                    }
                    .header {
                        background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
                        color: white;
                        padding: 30px;
                        text-align: center;
                        position: relative;
                    }
                    .company-logo {
                        font-size: 2.5rem;
                        margin-bottom: 10px;
                    }
                    .company-name {
                        font-size: 2rem;
                        font-weight: bold;
                        margin-bottom: 5px;
                    }
                    .form-title {
                        font-size: 1.2rem;
                        opacity: 0.9;
                    }
                    .qr-code {
                        position: absolute;
                        top: 20px;
                        left: 20px;
                        width: 80px;
                        height: 80px;
                        background: white;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 0.8rem;
                        color: #333;
                        text-align: center;
                    }
                    .content {
                        padding: 40px;
                    }
                    .order-info {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 30px;
                        margin-bottom: 40px;
                    }
                    .info-section {
                        background: #f8fafc;
                        padding: 25px;
                        border-radius: 12px;
                        border: 1px solid #e2e8f0;
                    }
                    .section-title {
                        font-size: 1.3rem;
                        font-weight: bold;
                        color: #8b5cf6;
                        margin-bottom: 20px;
                        border-bottom: 2px solid #8b5cf6;
                        padding-bottom: 10px;
                    }
                    .field {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 15px;
                        padding: 10px 0;
                        border-bottom: 1px solid #e2e8f0;
                    }
                    .field:last-child {
                        border-bottom: none;
                    }
                    .field-label {
                        font-weight: 600;
                        color: #475569;
                        min-width: 120px;
                    }
                    .field-value {
                        font-weight: 500;
                        color: #1e293b;
                        text-align: left;
                    }
                    .total-section {
                        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                        color: white;
                        padding: 25px;
                        border-radius: 12px;
                        text-align: center;
                        margin: 30px 0;
                    }
                    .total-amount {
                        font-size: 2.5rem;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    .total-label {
                        font-size: 1.2rem;
                        opacity: 0.9;
                    }
                    .footer {
                        background: #f8fafc;
                        padding: 25px;
                        text-align: center;
                        border-top: 1px solid #e2e8f0;
                        color: #64748b;
                    }
                    .date-stamp {
                        font-size: 0.9rem;
                        margin-bottom: 10px;
                    }
                    .company-info {
                        font-size: 0.85rem;
                        line-height: 1.4;
                    }
                    @media print {
                        body { padding: 0; }
                        .form-container { border: none; }
                    }
                </style>
            </head>
            <body>
                <div class="form-container">
                    <div class="header">
                        <div class="qr-code">
                            QR CODE<br>
                            #${order.id}
                        </div>
                        <div class="company-logo">💎</div>
                        <div class="company-name">YouzinElegancia</div>
                        <div class="form-title">استمارة طلبية رسمية</div>
                    </div>
                    
                    <div class="content">
                        <div class="order-info">
                            <div class="info-section">
                                <div class="section-title">معلومات العميل</div>
                                <div class="field">
                                    <span class="field-label">الاسم:</span>
                                    <span class="field-value">${order.customerName}</span>
                                </div>
                                <div class="field">
                                    <span class="field-label">الهاتف:</span>
                                    <span class="field-value">${order.phone}</span>
                                </div>
                                <div class="field">
                                    <span class="field-label">الولاية:</span>
                                    <span class="field-value">${order.wilaya}</span>
                                </div>
                                <div class="field">
                                    <span class="field-label">البلدية:</span>
                                    <span class="field-value">${order.city}</span>
                                </div>
                            </div>
                            
                            <div class="info-section">
                                <div class="section-title">تفاصيل الطلبية</div>
                                <div class="field">
                                    <span class="field-label">رقم الطلبية:</span>
                                    <span class="field-value">#${order.id}</span>
                                </div>
                                <div class="field">
                                    <span class="field-label">المنتج:</span>
                                    <span class="field-value">${order.product}</span>
                                </div>
                                <div class="field">
                                    <span class="field-label">المواصفات:</span>
                                    <span class="field-value">${order.variants}</span>
                                </div>
                                <div class="field">
                                    <span class="field-label">الكمية:</span>
                                    <span class="field-value">${order.quantity}</span>
                                </div>
                                <div class="field">
                                    <span class="field-label">التاريخ:</span>
                                    <span class="field-value">${new Date(order.date).toLocaleDateString('ar-DZ')}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="total-section">
                            <div class="total-amount">€${order.total.toFixed(2)}</div>
                            <div class="total-label">إجمالي المبلغ</div>
                        </div>
                    </div>
                    
                    <div class="footer">
                        <div class="date-stamp">تم إنشاء هذه الاستمارة في: ${new Date().toLocaleDateString('ar-DZ')} - ${new Date().toLocaleTimeString('ar-DZ')}</div>
                        <div class="company-info">
                            YouzinElegancia - متجر المجوهرات الفاخرة<br>
                            للاستفسارات: info@youzinelegancia.com | هاتف: +213 XXX XXX XXX
                        </div>
                    </div>
                </div>
                
                <script>
                    // Auto print when page loads
                    window.onload = function() {
                        setTimeout(function() {
                            window.print();
                        }, 500);
                    };
                </script>
            </body>
            </html>
        `;
        
        printWindow.document.write(formHTML);
        printWindow.document.close();
        
        this.showNotification(window.langManager.t('formDownloaded'));
    }
    
    openOrderModal(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;
        
        this.currentOrder = order;
        
        // Mark as read
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
        // Update field values
        document.getElementById('produitValue').textContent = order.product;
        document.getElementById('couleurValue').textContent = order.variants;
        document.getElementById('quantiteValue').textContent = order.quantity;
        document.getElementById('nomValue').textContent = order.customerName;
        document.getElementById('telephoneValue').textContent = order.phone;
        document.getElementById('wilayaValue').textContent = order.wilaya;
        document.getElementById('communeValue').textContent = order.city;
        
        // Calculate delivery fee (10% of product price)
        const productPrice = order.total * 0.9; // Assuming 90% is product, 10% is delivery
        const deliveryFee = order.total * 0.1;
        
        document.getElementById('prixProduitValue').textContent = `€${productPrice.toFixed(2)}`;
        document.getElementById('fraisLivraisonValue').textContent = `€${deliveryFee.toFixed(2)}`;
        document.getElementById('totalValue').textContent = `€${order.total.toFixed(2)}`;
        
        // Update notes
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
        const newNotes = currentNotes ? `${currentNotes}\n${note}` : note;
        
        textarea.value = newNotes;
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
        // Create notification element
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
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        this.lazyLoadImages();
        this.optimizeScrolling();
        this.preloadCriticalResources();
    }
    
    lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    optimizeScrolling() {
        let ticking = false;
        
        function updateScrollPosition() {
            // Add scroll-based optimizations here
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick, { passive: true });
    }
    
    preloadCriticalResources() {
        // Preload critical CSS and fonts
        const criticalResources = [
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
}

// Accessibility Manager
class AccessibilityManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupKeyboardNavigation();
        this.setupScreenReaderSupport();
        this.setupFocusManagement();
    }
    
    setupKeyboardNavigation() {
        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('searchInput').focus();
            }
            
            // Escape to close modals
            if (e.key === 'Escape') {
                const modal = document.getElementById('modalOverlay');
                if (modal.classList.contains('show')) {
                    window.ordersManager.closeModal();
                }
            }
        });
    }
    
    setupScreenReaderSupport() {
        // Add ARIA labels and descriptions
        document.querySelectorAll('button, input, select').forEach(element => {
            if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
                const text = element.textContent || element.placeholder || element.value;
                if (text) {
                    element.setAttribute('aria-label', text);
                }
            }
        });
    }
    
    setupFocusManagement() {
        // Trap focus in modals
        const modal = document.getElementById('modalOverlay');
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableContent = modal.querySelectorAll(focusableElements);
                const firstFocusableElement = focusableContent[0];
                const lastFocusableElement = focusableContent[focusableContent.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    window.langManager = new LanguageManager();
    window.ordersManager = new OrdersManager();
    window.performanceOptimizer = new PerformanceOptimizer();
    window.accessibilityManager = new AccessibilityManager();
    
    // Add loading states
    document.body.classList.add('loaded');
    
    // Initialize table headers translation
    window.langManager.updateTableHeaders();
    
    // Show scroll hint on mobile
    const scrollHint = document.getElementById('scrollHint');
    if (scrollHint && window.innerWidth <= 768) {
        scrollHint.classList.add('show');
        
        // Hide after 4 seconds or on scroll
        const hideHint = () => {
            scrollHint.classList.remove('show');
        };
        
        setTimeout(hideHint, 4000);
        
        const tableContainer = document.querySelector('.table-container');
        tableContainer.addEventListener('scroll', hideHint, { once: true });
    }
    
    // Service Worker registration for PWA capabilities
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('Service Worker registration failed:', err);
        });
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    // You could send this to an error reporting service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // You could send this to an error reporting service
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageManager,
        OrdersManager,
        PerformanceOptimizer,
        AccessibilityManager
    };
}
