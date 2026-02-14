"use client";
import { useState } from "react";

/**
 * Enum para definir las paletas de colores disponibles
 */
export enum ColorPalette {
  BlueOrange = "blue-orange",
  BeigeOrange = "beige-orange",
}

/**
 * Props del componente IframeModal
 */
interface IframeModalProps {
  /** Texto del botón que abre el modal */
  buttonText: string;
  /** URL del iframe a mostrar */
  iframeUrl: string;
  /** Título del iframe (para accesibilidad) */
  iframeTitle?: string;
  /** Paleta de colores a usar */
  colorPalette?: ColorPalette;
  /** Texto del botón de cerrar */
  closeButtonText?: string;
  /** Clases CSS adicionales para el botón */
  className?: string;
}

/**
 * Componente reutilizable para mostrar un iframe en un modal
 * con diferentes paletas de colores configurables
 */
export function IframeModal({
  buttonText,
  iframeUrl,
  iframeTitle = "Modal Iframe",
  colorPalette = ColorPalette.BlueOrange,
  closeButtonText = "Cerrar",
  className = ""
}: IframeModalProps) {
  const [showModal, setShowModal] = useState(false);

  // Configuración de estilos según la paleta seleccionada
  const paletteStyles = {
    [ColorPalette.BlueOrange]: {
      modal: "bg-blue-800",
      button: "bg-primary hover:bg-primary/90 text-white",
      closeButton: "bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors",
      title: "text-primary"
    },
    [ColorPalette.BeigeOrange]: {
      modal: "bg-[#f5e6d3]", // beige
      button: "bg-primary hover:bg-primary/90 text-white",
      closeButton: "bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors",
      title: "text-primary"
    }
  };

  const styles = paletteStyles[colorPalette];

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={className || `px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${styles.button}`}
      >
        {buttonText}
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
          <div 
            className={`w-11/12 max-w-4xl h-5/6 rounded-xl overflow-hidden shadow-2xl flex flex-col ${styles.modal}`}
          >
            {/* Header con botón de cerrar */}
            <div className="flex justify-between items-center p-4 border-b border-white/20">
              <h2 className={`text-xl font-bold ${styles.title}`}>
                {iframeTitle}
              </h2>
              <button 
                onClick={() => setShowModal(false)}
                className={styles.closeButton}
                aria-label={closeButtonText}
              >
                {closeButtonText}
              </button>
            </div>

            {/* Contenedor del iframe */}
            <div className="flex-1 p-4">
              <iframe
                src={iframeUrl}
                className="w-full h-full rounded-lg bg-white"
                title={iframeTitle}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
