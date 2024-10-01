"use strict";
function deleteItem(confirmDelete) {
    const modal = document.getElementById('modal');
    const confirmButton = document.getElementById('confirm-button');
    const cancelButton = document.getElementById('cancel-button');
    if (!modal || !confirmButton || !cancelButton) {
        console.error('Modal ou botões não encontrados');
        return;
    }
    // Exibe o modal
    modal.style.display = 'block';
    // Confirma a ação de deletar
    confirmButton.onclick = () => {
        confirmDelete();
        closeModal();
    };
    // Cancela a ação de deletar
    cancelButton.onclick = () => {
        closeModal();
    };
    // Fecha o modal se o usuário clicar fora do conteúdo
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };
}
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
}
// Função para deletar os itens selecionados do localStorage
function deleteSelectedItems() {
    const selectedKeys = ['burger'];
    selectedKeys.forEach((burgerArray) => {
        localStorage.removeItem(burgerArray);
    });
    console.log('Itens selecionados foram deletados.');
}
// Adicionando evento ao botão de deletar
const deleteButton = document.getElementById('Deletar');
if (deleteButton) {
    deleteButton.addEventListener('click', () => {
        deleteItem(() => {
            deleteSelectedItems();
        });
    });
}
else {
    throw new Error('Botão de deletar não encontrado');
}
