import './ApiState.css'

export function LoadingSpinner() {
  return (
    <div className="api-state api-state--loading" aria-label="Loading">
      <span className="spinner" />
    </div>
  )
}

export function ErrorMessage({ message, onRetry }) {
  return (
    <div className="api-state api-state--error" role="alert">
      <p>Failed to load content{message ? `: ${message}` : '.'}</p>
      {onRetry && (
        <button className="btn btn-outline api-state__retry" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  )
}
