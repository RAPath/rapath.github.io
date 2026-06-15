import React from 'react';
import OriginalBlogListPage from '@theme-original/BlogListPage';

// Filters now live in the BlogSidebar swizzle (left column).
export default function BlogListPageWrapper(props) {
  return <OriginalBlogListPage {...props} />;
}
