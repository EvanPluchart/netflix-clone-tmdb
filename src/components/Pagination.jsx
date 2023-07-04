import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const handleFirstPage = () => {
        onPageChange(1);
    };

    const handleLastPage = () => {
        onPageChange(totalPages);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={handleFirstPage}
                disabled={currentPage === 1}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded ${
                    currentPage === 1 ? 'disabled:opacity-50' : ''
                }`}
            >
                Première page
            </button>

            <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded ${
                    currentPage === 1 ? 'disabled:opacity-50' : ''
                }`}
            >
                Précédent
            </button>

            <span className="text-white font-bold py-2 px-4 mr-2 rounded">
                Page {currentPage} sur {totalPages}
            </span>

            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded ${
                    currentPage === totalPages ? 'disabled:opacity-50' : ''
                }`}
            >
                Suivant
            </button>

            <button
                onClick={handleLastPage}
                disabled={currentPage === totalPages}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${
                    currentPage === totalPages ? 'disabled:opacity-50' : ''
                }`}
            >
                Dernière page
            </button>
        </div>
    );
}
