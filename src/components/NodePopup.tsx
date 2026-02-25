import { useEffect, useRef } from 'react';
import type { GlobeNode } from '../data/nodes';
import './NodePopup.css';

interface NodePopupProps {
  node: GlobeNode | null;
  onClose: () => void;
}

export function NodePopup({ node, onClose }: NodePopupProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!node) return null;

  const { label, content } = node;

  return (
    <>
      <div
        className="popup-backdrop"
        onClick={onClose}
        role="presentation"
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        className="popup-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        <div className="popup-header">
          <h2 id="popup-title" className="popup-title">
            {content.heading || label}
          </h2>
          <button
            type="button"
            className="popup-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="popup-body">
          {content.stats.length > 0 && (
            <section className="popup-section">
              <h3 className="popup-section-title">At a glance</h3>
              <ul className="popup-list">
                {content.stats.map((stat, i) => (
                  <li key={i}>{stat}</li>
                ))}
              </ul>
            </section>
          )}
          {content.tips.length > 0 && (
            <section className="popup-section">
              <h3 className="popup-section-title">Tips to reduce waste</h3>
              <ul className="popup-list popup-tips">
                {content.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </section>
          )}
          {content.link && (
            <a
              href={content.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="popup-link"
            >
              {content.link.label}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
