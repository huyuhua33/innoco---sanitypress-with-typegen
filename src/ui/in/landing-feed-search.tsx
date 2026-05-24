import CardGrid from './card-grid'
import styles from './in.module.css'
import type { INCard } from './types'

type LandingFeedSearchProps = {
	cards?: INCard[]
	filters?: string[]
	placeholder?: string
}

export default function LandingFeedSearch({
	cards = [],
	filters = [],
	placeholder = 'Search by tag',
}: LandingFeedSearchProps) {
	const cardItems = cards ?? []
	const filterItems = filters ?? []
	const availableFilters = Array.from(
		new Set(
			[
				'All',
				...filterItems,
				...cardItems.flatMap((card) => card.tags ?? card.label ?? []),
			].filter(Boolean),
		),
	)

	return (
		<div className={styles.searchBlock} data-in-card-search>
			<div className={styles.searchBar}>
				<input
					aria-label="Search cards by tag"
					placeholder={placeholder}
					type="search"
				/>
			</div>
			<div className={styles.filters} aria-label="Card filters">
				{availableFilters.map((filter) => (
					<button
						aria-pressed={filter === 'All'}
						className={filter === 'All' ? styles.activeFilter : undefined}
						data-filter={filter}
						key={filter}
						type="button"
					>
						{filter}
					</button>
				))}
			</div>
			<CardGrid cards={cardItems} />
			<p className={styles.emptyState} hidden>
				No cards match that tag yet.
			</p>
			<script
				dangerouslySetInnerHTML={{
					__html: `
(() => {
  document.querySelectorAll('[data-in-card-search]').forEach((root) => {
    if (root.dataset.bound === 'true') return;
    root.dataset.bound = 'true';

    const input = root.querySelector('input[type="search"]');
    const buttons = Array.from(root.querySelectorAll('[data-filter]'));
    const cards = Array.from(root.querySelectorAll('[data-card-tags]'));
    const empty = root.querySelector('[class*="emptyState"]');
    let activeFilter = 'All';

    const apply = () => {
      const query = input.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const tags = (card.dataset.cardTags || '').toLowerCase();
        const text = (card.textContent || '').toLowerCase();
        const filterMatches = activeFilter === 'All' || tags.split('|').includes(activeFilter.toLowerCase());
        const queryMatches = !query || tags.includes(query) || text.includes(query);
        const isVisible = filterMatches && queryMatches;

        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });

      if (empty) empty.hidden = visibleCount > 0 || cards.length === 0;
    };

    input.addEventListener('input', apply);
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        activeFilter = button.dataset.filter || 'All';
        buttons.forEach((item) => {
          const isActive = item === button;
          item.setAttribute('aria-pressed', String(isActive));
          item.classList.toggle('${styles.activeFilter}', isActive);
        });
        apply();
      });
    });
  });
})();
`,
				}}
			/>
		</div>
	)
}
