export default class CardComponent {
    

    addDeleteEventListener() {
        const deleteButton = document.querySelectorAll('.delete-btn');
        
        deleteButton.forEach(button => {
            button.addEventListener('click', (event) => {
                const target = event.target as HTMLElement;
                const burgerId = target.getAttribute('data-id');
                if (burgerId) {
                    this.deleteBurger(burgerId);
                }
            });
        });
    }

    deleteBurger(burgerId: string) {
        console.log(`Deletando burger com ID: ${burgerId}`);
    }
}




// function deleteItem(confirmDelete: () => void): void {
//     const modal = document.getElementById('modal') as HTMLElement | null;
//     const confirmButton = document.getElementById('confirm-button') as HTMLButtonElement | null;
//     const cancelButton = document.getElementById('cancel-button') as HTMLButtonElement | null;

//     if (!modal || !confirmButton || !cancelButton) {
//         console.error('Modal ou botões não encontrados');
//         return;
//     }

//     // Exibe o modal
//     modal.style.display = 'block';

//     // Confirma a ação de deletar
//     confirmButton.onclick = () => {
//         confirmDelete();
//         closeModal();
//     };

//     // Cancela a ação de deletar
//     cancelButton.onclick = () => {
//         closeModal();
//     };

//     // Fecha o modal se o usuário clicar fora do conteúdo
//     window.onclick = (event: MouseEvent) => {
//         if (event.target === modal) {
//             closeModal();
//         }
//     };
// }

// function closeModal(): void {
//     const modal = document.getElementById('modal') as HTMLElement | null;
//     if (modal) {
//         modal.style.display = 'none';
//     }
// }

// // Função para deletar os itens selecionados do localStorage
// function deleteSelectedItems(): void {
//     const selectedKeys: string[] = ['burger'];

//     selectedKeys.forEach((burgerArray) => {
//         localStorage.removeItem(burgerArray);
//     });

//     console.log('Itens selecionados foram deletados.');
// }

// // Adicionando evento ao botão de deletar
// const deleteButton = document.getElementById('Deletar') as HTMLButtonElement | null;
// if (deleteButton) {
//     deleteButton.addEventListener('click', () => {
//         deleteItem(() => {
//             deleteSelectedItems();
//         });
//     });
// } else {
//     throw new Error('Botão de deletar não encontrado');
// }