import type { Block } from '../lib/types';

type CalloutBlock = Extract<Block, { kind: 'callout' }>;

const TONE_ICON: Record<CalloutBlock['tone'], string> = {
  info: 'ℹ️',
  warning: '⚠️',
  tip: '💡',
  legal: '⚖️',
};

export function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="content-blocks">
      {blocks.map((block, index) => {
        switch (block.kind) {
          case 'paragraph':
            return (
              <p key={index} className="content-blocks__paragraph">
                {block.text}
              </p>
            );

          case 'bullets':
            return (
              <section key={index} className="content-block">
                {block.heading && <h3>{block.heading}</h3>}
                <ul className="bullet-list">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </section>
            );

          case 'steps':
            return (
              <section key={index} className="content-block">
                {block.heading && <h3>{block.heading}</h3>}
                <ol className="step-list">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span className="step-list__marker" aria-hidden="true">
                        {itemIndex + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </section>
            );

          case 'callout':
            return (
              <aside key={index} className={`callout callout--${block.tone}`}>
                <span className="callout__icon" aria-hidden="true">
                  {TONE_ICON[block.tone]}
                </span>
                <div>
                  <strong>{block.title}</strong>
                  <p>{block.text}</p>
                </div>
              </aside>
            );

          case 'table':
            return (
              <section key={index} className="content-block">
                {block.heading && <h3>{block.heading}</h3>}
                <div className="table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        {block.columns.map((column) => (
                          <th key={column} scope="col">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );

          case 'definitions':
            return (
              <section key={index} className="content-block">
                {block.heading && <h3>{block.heading}</h3>}
                <dl className="definition-list">
                  {block.items.map((item) => (
                    <div key={item.term} className="definition-list__item">
                      <dt>{item.term}</dt>
                      <dd>{item.text}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}