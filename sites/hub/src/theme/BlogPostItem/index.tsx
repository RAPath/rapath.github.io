import React from 'react';
import OriginalBlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import './styles.css';

/**
 * On the blog list page: render a compact title-only row.
 * On an individual post page: render the full original layout.
 */
export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage, metadata } = useBlogPost();

  if (isBlogPostPage) {
    return <OriginalBlogPostItem {...props} />;
  }

  // List view — title + meta only
  const { title, permalink, date, tags, formattedDate } = metadata;

  const jurisdictionTag = tags.find(
    (t) => !['regulatory-changes', 'consultations', 'reform-tracker', 'key-dates',
              'tga', 'dgda', 'anvisa', 'health-canada', 'nmpa', 'mdr', 'mdco',
              'cdsco', 'bpom', 'pmda', 'mda', 'cofepris', 'medsafe',
              'fda-philippines', 'roszdravnadzor', 'sfda', 'hsa', 'mfds',
              'nmra', 'swissmedic', 'fda-thailand', 'mhra', 'fda', 'moh'].includes(t.label)
  );

  const categoryTag = tags.find((t) =>
    ['regulatory-changes', 'consultations', 'reform-tracker', 'key-dates'].includes(t.label)
  );

  const CAT_ICON: Record<string, string> = {
    'regulatory-changes': '📋',
    'consultations': '💬',
    'reform-tracker': '🔄',
    'key-dates': '📅',
  };

  return (
    <article className="blog-list-item">
      <a href={permalink} className="blog-list-item__title">{title}</a>
      <div className="blog-list-item__meta">
        <time dateTime={date} className="blog-list-item__date">{formattedDate}</time>
        {jurisdictionTag && (
          <a href={jurisdictionTag.permalink} className="bli-tag bli-tag--jurisdiction">
            {jurisdictionTag.label}
          </a>
        )}
        {categoryTag && (
          <a href={categoryTag.permalink} className="bli-tag bli-tag--category">
            {CAT_ICON[categoryTag.label] ?? ''} {categoryTag.label.replace(/-/g, ' ')}
          </a>
        )}
      </div>
    </article>
  );
}
