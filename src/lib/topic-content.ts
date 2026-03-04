export interface TopicSection {
  title: string;
  body: string[];
}

export interface TopicPageContent {
  title: string;
  subtitle: string;
  overview: string;
  objectives: string[];
  sections: TopicSection[];
  imagePrompts: string[];
}

export const tutorialTopicContent: Record<string, TopicPageContent> = {
  'osi/introduction': {
    title: 'OSI Model Introduction',
    subtitle: 'Why layered architecture is essential in networking',
    overview:
      'The Open Systems Interconnection (OSI) model is a conceptual framework that explains how data moves from one device to another through a structured set of layers.',
    objectives: [
      'Understand the purpose of layered communication',
      'Identify how OSI helps standardize networking',
      'Relate OSI concepts to real network troubleshooting',
    ],
    sections: [
      {
        title: 'What the OSI Model Solves',
        body: [
          'Computer systems from different vendors need common rules to communicate. The OSI model organizes responsibilities into layers so protocols can interoperate without depending on one single vendor stack.',
          'By separating concerns, engineers can improve one layer without redesigning the entire communication process.'
        ],
      },
      {
        title: 'How Data Travels Through Layers',
        body: [
          'When sending data, each lower layer adds control information in a process called encapsulation. On the receiver side, each layer removes its own header to reconstruct the original message.',
          'This model helps explain where errors happen and what protocol should be inspected first.'
        ],
      },
    ],
    imagePrompts: ['OSI stack overview diagram', 'Data encapsulation flow diagram'],
  },
  'osi/layers': {
    title: 'Layers of the OSI Model',
    subtitle: 'A quick map of all seven layers and their roles',
    overview:
      'The OSI model has seven layers, each handling a specific part of communication, from hardware transmission to user-facing applications.',
    objectives: [
      'Memorize the seven layers in order',
      'Understand each layer responsibility',
      'Connect each layer with practical examples',
    ],
    sections: [
      {
        title: 'Layer Order (Top to Bottom)',
        body: [
          'Application, Presentation, Session, Transport, Network, Data Link, and Physical. Upper layers focus on user and software interactions, while lower layers handle delivery across media.',
          'A practical way to study OSI is grouping layers into application support (7-5), end-to-end delivery (4-3), and local transmission (2-1).'
        ],
      },
      {
        title: 'Why Layer Separation Matters',
        body: [
          'Layer separation improves modular design. For example, changing Ethernet hardware does not require rewriting web application code.',
          'It also provides a shared language for troubleshooting teams, allowing faster isolation of failures.'
        ],
      },
    ],
    imagePrompts: ['Seven-layer pyramid diagram', 'OSI layer-to-protocol mapping chart'],
  },
  'osi/data-link-layer': {
    title: 'Data Link Layer',
    subtitle: 'Node-to-node delivery over a local link',
    overview:
      'The Data Link layer ensures reliable transfer between directly connected nodes using framing, MAC addressing, and error detection.',
    objectives: [
      'Understand framing and MAC addresses',
      'Learn switching and local segment communication',
      'Identify common layer-2 protocols and issues',
    ],
    sections: [
      {
        title: 'Core Responsibilities',
        body: [
          'This layer packages bits into frames and adds source and destination MAC addresses. It also uses mechanisms like CRC checks to detect transmission errors.',
          'Flow control and access control mechanisms decide when devices can safely use shared media.'
        ],
      },
      {
        title: 'Real-World Examples',
        body: [
          'Ethernet, Wi-Fi MAC, and VLAN tagging are common Data Link layer technologies. Switches primarily operate at this layer to forward frames efficiently.',
          'Typical issues include duplex mismatch, MAC table overflow, and VLAN misconfiguration.'
        ],
      },
    ],
    imagePrompts: ['Ethernet frame structure diagram', 'Switch forwarding example'],
  },
  'osi/network-layer': {
    title: 'Network Layer',
    subtitle: 'Path selection and logical addressing across networks',
    overview:
      'The Network layer enables communication between different networks using logical addressing and routing decisions.',
    objectives: [
      'Learn IP addressing fundamentals',
      'Understand routing and forwarding',
      'Recognize common layer-3 troubleshooting points',
    ],
    sections: [
      {
        title: 'Addressing and Routing',
        body: [
          'This layer assigns and interprets logical addresses such as IPv4 and IPv6. Routers examine these addresses to choose the best path for packet delivery.',
          'Routing protocols share route information so packets can traverse multiple hops and reach remote destinations.'
        ],
      },
      {
        title: 'Operational Challenges',
        body: [
          'Incorrect subnet masks, missing default routes, and ACL misconfiguration often break connectivity at this layer.',
          'Tools like traceroute and ping help isolate route failures and latency between hops.'
        ],
      },
    ],
    imagePrompts: ['IP packet header diagram', 'Router path selection topology'],
  },
  'osi/transport-layer': {
    title: 'Transport Layer',
    subtitle: 'End-to-end delivery, reliability, and segmentation',
    overview:
      'The Transport layer provides process-to-process communication, reliability controls, and service differentiation for applications.',
    objectives: [
      'Compare TCP and UDP behavior',
      'Understand ports and multiplexing',
      'Learn reliability mechanisms such as ACK and retransmission',
    ],
    sections: [
      {
        title: 'TCP vs UDP',
        body: [
          'TCP is connection-oriented and prioritizes reliability through sequencing, acknowledgments, and retransmissions. UDP is connectionless and optimized for low overhead and speed.',
          'Application needs determine the protocol choice, such as web traffic for TCP or streaming and gaming for UDP.'
        ],
      },
      {
        title: 'Ports and Sessions',
        body: [
          'Ports allow multiple applications to communicate simultaneously on one host. Transport headers map incoming data to the correct process.',
          'Common failures include blocked ports, exhausted sockets, and packet loss causing retransmission overhead.'
        ],
      },
    ],
    imagePrompts: ['TCP three-way handshake', 'TCP and UDP comparison chart'],
  },
  'osi/session-layer': {
    title: 'Session Layer',
    subtitle: 'Dialog control and communication session management',
    overview:
      'The Session layer establishes, manages, and terminates sessions between applications to maintain stable communication workflows.',
    objectives: [
      'Understand session setup and teardown',
      'Learn synchronization checkpoints',
      'See where session concepts appear in modern systems',
    ],
    sections: [
      {
        title: 'Session Management Concepts',
        body: [
          'This layer coordinates who speaks when and keeps long-running conversations organized. It can insert synchronization points to resume data transfer after interruption.',
          'In distributed systems, session continuity is critical for user state and transactional consistency.'
        ],
      },
      {
        title: 'Modern Interpretation',
        body: [
          'Although modern protocol stacks often merge session behavior into other layers, the OSI Session layer remains useful for analysis and architecture discussions.',
          'Examples include RPC sessions, authentication sessions, and persistent application channels.'
        ],
      },
    ],
    imagePrompts: ['Session establishment flow', 'Checkpoint-based transfer recovery diagram'],
  },
  'osi/presentation-layer': {
    title: 'Presentation Layer',
    subtitle: 'Data format, encryption, and transformation',
    overview:
      'The Presentation layer ensures data is represented in a compatible format for both sender and receiver systems.',
    objectives: [
      'Understand encoding and serialization',
      'Identify where encryption/decryption fits',
      'See how compression improves transfer efficiency',
    ],
    sections: [
      {
        title: 'Translation and Encoding',
        body: [
          'Different systems may store text, numbers, and multimedia in different internal formats. This layer transforms data into a standardized exchange format.',
          'Formats like JSON, XML, and character encodings such as UTF-8 are practical examples of representation decisions.'
        ],
      },
      {
        title: 'Security and Compression',
        body: [
          'Encryption protects confidentiality during transfer, while compression reduces payload size and bandwidth usage.',
          'TLS processing and media encoding pipelines are common real-world places where presentation concerns appear.'
        ],
      },
    ],
    imagePrompts: ['Data transformation pipeline', 'Encryption and compression flow'],
  },
  'osi/application-layer': {
    title: 'Application Layer',
    subtitle: 'Network services closest to end users',
    overview:
      'The Application layer provides services and interfaces used directly by user applications and network-aware software.',
    objectives: [
      'Identify common application-layer protocols',
      'Understand service-oriented communication',
      'Relate user requests to protocol behavior',
    ],
    sections: [
      {
        title: 'Application Services',
        body: [
          'Protocols such as HTTP, HTTPS, SMTP, DNS, and FTP operate at this layer and define rules for specific communication tasks.',
          'Client and server software rely on these protocols to exchange structured requests and responses.'
        ],
      },
      {
        title: 'Troubleshooting Focus',
        body: [
          'Application-layer failures include invalid request formats, authentication errors, and service endpoint issues.',
          'Logs, API response codes, and protocol analyzers provide critical visibility for diagnosis.'
        ],
      },
    ],
    imagePrompts: ['Client-server request response diagram', 'Common application protocols map'],
  },
  'css/basics': {
    title: 'CSS Basics',
    subtitle: 'Styling the structure created with HTML',
    overview:
      'CSS (Cascading Style Sheets) controls visual presentation, including colors, spacing, typography, and layout behavior.',
    objectives: [
      'Understand selectors and declarations',
      'Use the box model confidently',
      'Apply reusable style patterns',
    ],
    sections: [
      {
        title: 'Syntax and Cascade',
        body: [
          'A CSS rule combines a selector with declaration blocks of property-value pairs. The cascade decides which rule wins based on source order, specificity, and importance.',
          'Understanding inheritance and specificity prevents style conflicts in larger projects.'
        ],
      },
      {
        title: 'Box Model Foundations',
        body: [
          'Every element is rendered as a box with content, padding, border, and margin. Precise control of these layers creates consistent visual rhythm.',
          'Use spacing tokens and reusable classes to keep design consistent across pages.'
        ],
      },
    ],
    imagePrompts: ['CSS rule anatomy diagram', 'Box model visual'],
  },
  'css/selectors': {
    title: 'CSS Selectors',
    subtitle: 'Targeting elements accurately and maintainably',
    overview:
      'Selectors are patterns that identify which elements receive styles, from simple tags to complex combinators and pseudo-classes.',
    objectives: [
      'Use class, id, and attribute selectors',
      'Understand specificity impact',
      'Write selectors that are easy to maintain',
    ],
    sections: [
      {
        title: 'Selector Types',
        body: [
          'Common selectors include element, class, id, attribute, pseudo-class, and pseudo-element selectors. Combinators allow parent-child and sibling targeting.',
          'Prefer class-based selectors for reusable UI patterns in component-driven systems.'
        ],
      },
      {
        title: 'Best Practices',
        body: [
          'Avoid deeply nested selectors that tightly couple style to HTML structure. Keep selectors predictable and scoped to components or sections.',
          'Use utility classes or design tokens where appropriate to reduce override complexity.'
        ],
      },
    ],
    imagePrompts: ['Selector types cheat sheet', 'Specificity comparison table'],
  },
  'css/layout': {
    title: 'CSS Layout',
    subtitle: 'Building robust page structure and alignment',
    overview:
      'Layout techniques define how page sections and components are arranged across screen sizes.',
    objectives: [
      'Compare block, inline, and positioning strategies',
      'Use modern responsive layout tools',
      'Plan content hierarchy with spacing and alignment',
    ],
    sections: [
      {
        title: 'Positioning Models',
        body: [
          'Static, relative, absolute, fixed, and sticky positioning provide different control over element placement.',
          'Use positioning intentionally to avoid overlap bugs and maintain predictable flow.'
        ],
      },
      {
        title: 'Responsive Structure',
        body: [
          'Combine container widths, media queries, and fluid spacing to create interfaces that adapt gracefully to screen size changes.',
          'A responsive layout strategy starts with mobile constraints and scales upward.'
        ],
      },
    ],
    imagePrompts: ['Positioning mode examples', 'Responsive breakpoint layout sketch'],
  },
  'css/flexbox': {
    title: 'CSS Flexbox',
    subtitle: 'One-dimensional layout for dynamic alignment',
    overview:
      'Flexbox is ideal for arranging items in rows or columns with flexible sizing and alignment behavior.',
    objectives: [
      'Understand main axis and cross axis',
      'Use alignment and distribution properties',
      'Build adaptable UI rows and stacks quickly',
    ],
    sections: [
      {
        title: 'Container Properties',
        body: [
          'Key properties include display: flex, flex-direction, justify-content, align-items, and gap. These define axis direction and spacing behavior.',
          'Flex wrapping is useful when items should move to the next line on smaller screens.'
        ],
      },
      {
        title: 'Item Properties',
        body: [
          'Flex item controls include flex-grow, flex-shrink, flex-basis, and align-self. These determine how individual items adapt to available space.',
          'Use explicit basis values and constraints to avoid unstable resizing.'
        ],
      },
    ],
    imagePrompts: ['Flex main/cross axis diagram', 'Flex alignment examples'],
  },
  'css/grid': {
    title: 'CSS Grid',
    subtitle: 'Two-dimensional layout with rows and columns',
    overview:
      'CSS Grid provides powerful two-dimensional control for page and component layouts with explicit tracks and areas.',
    objectives: [
      'Create track-based layouts',
      'Use grid-template-areas effectively',
      'Combine Grid with responsive design patterns',
    ],
    sections: [
      {
        title: 'Grid Fundamentals',
        body: [
          'Define columns and rows using grid-template-columns and grid-template-rows. Place items with line numbers or named areas.',
          'Use minmax and fractional units to keep layouts fluid and resilient.'
        ],
      },
      {
        title: 'Responsive Grids',
        body: [
          'Auto-fit and auto-fill patterns simplify adaptive card layouts. Complex dashboards benefit from named grid areas and template switching by breakpoint.',
          'Grid and Flexbox are complementary: Grid for macro layout, Flexbox for local alignment.'
        ],
      },
    ],
    imagePrompts: ['Grid tracks and lines diagram', 'Responsive card grid example'],
  },
  'javascript/intro': {
    title: 'JavaScript Introduction',
    subtitle: 'The core language of web interactivity',
    overview:
      'JavaScript enables dynamic behavior in browsers and servers, from simple DOM updates to full application logic.',
    objectives: [
      'Understand JavaScript runtime basics',
      'Write clear statements and expressions',
      'Start thinking in event-driven flow',
    ],
    sections: [
      {
        title: 'Where JavaScript Runs',
        body: [
          'JavaScript runs in browser engines and server environments such as Node.js. The same language powers UI interactions, APIs, and tooling.',
          'Its flexibility comes from first-class functions, dynamic objects, and asynchronous programming support.'
        ],
      },
      {
        title: 'Core Building Blocks',
        body: [
          'Variables, operators, conditions, loops, and functions form the foundation of JavaScript programming.',
          'Mastering these constructs makes later topics like state management and component logic easier.'
        ],
      },
    ],
    imagePrompts: ['JavaScript runtime overview', 'Execution flow basics'],
  },
  'javascript/variables': {
    title: 'JavaScript Variables',
    subtitle: 'Storing and managing data values',
    overview:
      'Variables hold data and references used by your program during execution.',
    objectives: [
      'Differentiate let, const, and var',
      'Understand scope and hoisting behavior',
      'Choose immutable patterns by default',
    ],
    sections: [
      {
        title: 'Declaration Keywords',
        body: [
          'Use const by default and let for values that change. Avoid var in modern code due to function scope and hoisting pitfalls.',
          'Clear naming and predictable mutability improve readability and reduce bugs.'
        ],
      },
      {
        title: 'Scope and Lifetime',
        body: [
          'Block scope determines where variables are accessible. Attempting to use values outside scope produces runtime or reference issues.',
          'Understanding scope helps prevent accidental shadowing and side effects in large codebases.'
        ],
      },
    ],
    imagePrompts: ['Scope nesting diagram', 'let/const/var comparison'],
  },
  'javascript/functions': {
    title: 'JavaScript Functions',
    subtitle: 'Reusable logic units for modular code',
    overview:
      'Functions encapsulate behavior, accept input, and return output, enabling reusable and testable code.',
    objectives: [
      'Write declaration, expression, and arrow functions',
      'Understand parameters, return values, and defaults',
      'Use higher-order functions effectively',
    ],
    sections: [
      {
        title: 'Function Forms',
        body: [
          'JavaScript supports function declarations, function expressions, and arrow functions. Each form has small differences in syntax and this binding.',
          'Choose the form that best communicates intent and context.'
        ],
      },
      {
        title: 'Composability',
        body: [
          'Small pure functions are easier to test and combine. Higher-order functions enable abstraction for filtering, mapping, and transformation pipelines.',
          'Keep function responsibilities narrow to improve maintainability.'
        ],
      },
    ],
    imagePrompts: ['Function call stack flow', 'Higher-order function concept map'],
  },
  'javascript/objects': {
    title: 'JavaScript Objects',
    subtitle: 'Structured key-value data and behavior',
    overview:
      'Objects group related data and methods, forming the foundation for most JavaScript application models.',
    objectives: [
      'Create and access object properties',
      'Use destructuring and spread syntax',
      'Understand references and mutation effects',
    ],
    sections: [
      {
        title: 'Object Fundamentals',
        body: [
          'Objects are collections of key-value pairs. Dot and bracket notation allow dynamic and static property access.',
          'Methods are functions stored as object properties to model behavior with state.'
        ],
      },
      {
        title: 'Immutability Patterns',
        body: [
          'Because objects are reference types, direct mutation can create hidden side effects. Spread cloning helps create predictable update flows.',
          'This is especially important in UI frameworks where state change detection depends on reference updates.'
        ],
      },
    ],
    imagePrompts: ['Object structure diagram', 'Reference vs copy visualization'],
  },
  'javascript/arrays': {
    title: 'JavaScript Arrays',
    subtitle: 'Ordered collections and iteration patterns',
    overview:
      'Arrays store ordered values and provide rich methods for transformation, searching, and aggregation.',
    objectives: [
      'Work with array iteration methods',
      'Use map, filter, reduce idiomatically',
      'Avoid mutating shared array state',
    ],
    sections: [
      {
        title: 'Core Methods',
        body: [
          'Array methods like map, filter, find, and reduce enable expressive data processing. These methods reduce boilerplate compared to manual loops.',
          'Method chaining can improve readability when each step has a clear purpose.'
        ],
      },
      {
        title: 'Performance and Safety',
        body: [
          'Prefer non-mutating operations when working with shared state in applications. Use defensive checks when handling sparse or external data arrays.',
          'Choose loop constructs intentionally for performance-critical code paths.'
        ],
      },
    ],
    imagePrompts: ['Array transformation pipeline', 'Common array methods chart'],
  },
  'javascript/dom': {
    title: 'JavaScript DOM',
    subtitle: 'Interacting with the browser document model',
    overview:
      'The DOM is a tree representation of page elements that JavaScript can read and modify in real time.',
    objectives: [
      'Select and update DOM elements',
      'Handle events effectively',
      'Understand rendering and repaint implications',
    ],
    sections: [
      {
        title: 'Element Selection and Update',
        body: [
          'Methods like querySelector and querySelectorAll locate elements for content, class, and style updates. Event handlers add interactivity based on user actions.',
          'Use delegation for scalable event handling in dynamic lists.'
        ],
      },
      {
        title: 'Performance Considerations',
        body: [
          'Frequent layout-triggering operations can hurt performance. Batch DOM updates and avoid unnecessary reflows where possible.',
          'Understanding the render pipeline helps create smoother interfaces.'
        ],
      },
    ],
    imagePrompts: ['DOM tree diagram', 'Event bubbling and capturing flow'],
  },
  'react/intro': {
    title: 'React Introduction',
    subtitle: 'Component-based UI development',
    overview:
      'React builds interfaces from reusable components that react to state changes efficiently.',
    objectives: [
      'Understand declarative UI principles',
      'Learn component composition basics',
      'Connect state updates to UI rendering',
    ],
    sections: [
      {
        title: 'Why React',
        body: [
          'React simplifies UI complexity by breaking pages into components with explicit inputs and outputs. Its declarative approach makes interface behavior predictable.',
          'The virtual DOM helps optimize rendering while preserving a clean mental model.'
        ],
      },
      {
        title: 'Core Concepts',
        body: [
          'JSX, props, state, and component lifecycles form the base toolkit. Building with composition keeps interfaces modular and testable.',
          'Start with small components and combine them into larger feature sections.'
        ],
      },
    ],
    imagePrompts: ['React component tree', 'State-to-UI rendering cycle'],
  },
  'react/components': {
    title: 'React Components',
    subtitle: 'Reusable UI building blocks',
    overview:
      'Components encapsulate structure, logic, and style into reusable units that keep code organized.',
    objectives: [
      'Build clean functional components',
      'Split UI by responsibility',
      'Compose larger screens from smaller parts',
    ],
    sections: [
      {
        title: 'Component Design',
        body: [
          'A good component has one clear responsibility and predictable inputs through props. Avoid mixing unrelated concerns in one large component.',
          'Extract repeating patterns into shared components to improve consistency.'
        ],
      },
      {
        title: 'Composition Patterns',
        body: [
          'Components can contain other components to represent hierarchy and behavior. Composition is preferred over duplication for maintainable systems.',
          'Use clear naming and prop contracts for team-friendly development.'
        ],
      },
    ],
    imagePrompts: ['Component decomposition example', 'Atomic-to-page composition map'],
  },
  'react/props-state': {
    title: 'React Props and State',
    subtitle: 'Data flow fundamentals in React apps',
    overview:
      'Props pass data into components, while state stores internal mutable data that drives re-rendering.',
    objectives: [
      'Differentiate props and state clearly',
      'Design unidirectional data flow',
      'Handle derived UI from state changes',
    ],
    sections: [
      {
        title: 'Props',
        body: [
          'Props are read-only inputs passed from parent to child. They make components reusable by parameterizing behavior and presentation.',
          'Type-safe props interfaces improve clarity and prevent runtime mistakes.'
        ],
      },
      {
        title: 'State',
        body: [
          'State belongs to a component and changes over time based on user interactions or async data. Updating state triggers UI updates automatically.',
          'Keep state minimal and derive display values whenever possible.'
        ],
      },
    ],
    imagePrompts: ['Parent-child props flow', 'State update lifecycle diagram'],
  },
  'react/hooks': {
    title: 'React Hooks',
    subtitle: 'State and side effects in functional components',
    overview:
      'Hooks let functional components manage state, effects, context, and memoization without class components.',
    objectives: [
      'Use useState and useEffect correctly',
      'Understand dependency arrays',
      'Adopt reusable custom hooks patterns',
    ],
    sections: [
      {
        title: 'Common Built-in Hooks',
        body: [
          'useState manages local state, useEffect handles side effects, and useMemo/useCallback optimize expensive recalculations and callback identity.',
          'Correct hook usage depends on predictable dependency tracking and pure render functions.'
        ],
      },
      {
        title: 'Custom Hooks',
        body: [
          'Custom hooks extract reusable stateful logic and simplify components. They are ideal for API handling, form logic, and event subscriptions.',
          'Keep hooks focused and document expected inputs and outputs clearly.'
        ],
      },
    ],
    imagePrompts: ['Hook lifecycle timeline', 'Custom hook abstraction flow'],
  },
  'react/routing': {
    title: 'React Routing',
    subtitle: 'Navigation and page structure in modern apps',
    overview:
      'Routing maps URLs to UI views, enabling multi-page app experiences with client-side transitions and server rendering support.',
    objectives: [
      'Understand route hierarchy and nesting',
      'Use dynamic segments for data-driven pages',
      'Manage navigation states and active links',
    ],
    sections: [
      {
        title: 'Route Design',
        body: [
          'Well-structured routes mirror product information architecture. Nested routes improve reuse of layouts and shared UI regions.',
          'Consistent route naming improves SEO, maintainability, and team communication.'
        ],
      },
      {
        title: 'Navigation Experience',
        body: [
          'Provide clear active states, loading transitions, and fallback pages for missing content. Route guards and redirects should be predictable.',
          'Navigation quality directly affects perceived app speed and usability.'
        ],
      },
    ],
    imagePrompts: ['Nested route structure chart', 'Navigation flow wireframe'],
  },
  'sql/basics': {
    title: 'SQL Basics',
    subtitle: 'Foundations of relational data querying',
    overview:
      'SQL is the language used to define, retrieve, and manage data in relational database systems.',
    objectives: [
      'Understand tables, rows, and columns',
      'Write basic SELECT statements',
      'Use filtering and sorting effectively',
    ],
    sections: [
      {
        title: 'Relational Model Essentials',
        body: [
          'Data is stored in tables with defined schemas. Primary keys uniquely identify rows, and constraints protect data quality.',
          'Normalization reduces redundancy and improves consistency.'
        ],
      },
      {
        title: 'Basic Querying',
        body: [
          'SELECT, WHERE, ORDER BY, and LIMIT form the core query toolkit. These clauses let you retrieve focused subsets of data quickly.',
          'Well-indexed queries improve response time significantly for larger datasets.'
        ],
      },
    ],
    imagePrompts: ['Relational table relationship diagram', 'SQL SELECT clause breakdown'],
  },
  'sql/queries': {
    title: 'SQL Queries',
    subtitle: 'Writing practical and efficient database operations',
    overview:
      'Advanced SQL queries combine filtering, grouping, and subqueries to answer real application questions.',
    objectives: [
      'Use aggregate functions with GROUP BY',
      'Apply HAVING and nested queries',
      'Improve query readability and maintainability',
    ],
    sections: [
      {
        title: 'Aggregation and Grouping',
        body: [
          'Functions like COUNT, SUM, AVG, MIN, and MAX summarize datasets. GROUP BY and HAVING help generate insights from categorized data.',
          'Use aliases and clear query formatting to keep complex queries understandable.'
        ],
      },
      {
        title: 'Subqueries and CTEs',
        body: [
          'Subqueries enable multi-step logic inside a query. Common Table Expressions (CTEs) improve readability for layered transformations.',
          'Choose the simplest query structure that remains easy to debug and optimize.'
        ],
      },
    ],
    imagePrompts: ['Aggregation workflow', 'Subquery vs CTE comparison'],
  },
  'sql/joins': {
    title: 'SQL Joins',
    subtitle: 'Combining records from multiple tables',
    overview:
      'Joins connect related tables so applications can read complete datasets across entities.',
    objectives: [
      'Differentiate INNER, LEFT, RIGHT, and FULL joins',
      'Write safe join conditions',
      'Interpret join outputs correctly',
    ],
    sections: [
      {
        title: 'Join Types',
        body: [
          'INNER JOIN returns matching rows only, while LEFT JOIN keeps all rows from the left table. RIGHT and FULL joins expand this behavior based on side inclusion.',
          'Choosing the correct join type depends on the question being asked.'
        ],
      },
      {
        title: 'Common Mistakes',
        body: [
          'Missing join conditions can create Cartesian products and huge result sets. Ambiguous column names should be fully qualified with table aliases.',
          'Always validate row counts when building new joins in production queries.'
        ],
      },
    ],
    imagePrompts: ['Join type venn diagrams', 'Multi-table join relationship example'],
  },
  'prisma/intro': {
    title: 'Prisma ORM Introduction',
    subtitle: 'Type-safe database access for modern apps',
    overview:
      'Prisma is a next-generation ORM that provides schema-based modeling, migrations, and strongly typed client queries.',
    objectives: [
      'Understand Prisma schema and models',
      'Learn migration workflow basics',
      'Use Prisma Client for type-safe queries',
    ],
    sections: [
      {
        title: 'Prisma Workflow',
        body: [
          'Define models in prisma/schema.prisma, generate migrations, and sync your database schema over time.',
          'Prisma Client is generated from the schema and gives autocompletion and compile-time type checks.'
        ],
      },
      {
        title: 'Practical Benefits',
        body: [
          'Teams gain safer refactoring, fewer query bugs, and cleaner data-layer code compared to raw string-based query building.',
          'Prisma works well with modern frameworks and supports multiple relational and NoSQL databases.'
        ],
      },
    ],
    imagePrompts: ['Prisma schema to client pipeline', 'Migration lifecycle diagram'],
  },
  'line-coding/unipolar': {
    title: 'Unipolar Line Coding',
    subtitle: 'Single-polarity signaling with NRZ representation',
    overview:
      'Unipolar signaling uses one active voltage polarity for binary representation and is one of the earliest digital line coding approaches.',
    objectives: [
      'Understand how Unipolar NRZ maps bits to signal levels',
      'Identify practical drawbacks such as DC component and synchronization challenges',
      'Recognize where unipolar encoding is useful as a conceptual baseline',
    ],
    sections: [
      {
        title: 'Included Scheme: NRZ',
        body: [
          'In Unipolar NRZ, one binary value (typically 1) is represented by a positive voltage, while the other value (0) is represented by zero voltage.',
          'Because the signal does not return to a neutral midpoint within each bit interval, this format is simple to generate but less robust for clock recovery over long sequences.'
        ],
      },
      {
        title: 'Advantages and Limitations',
        body: [
          'The primary advantage is implementation simplicity, which makes it useful for introductory study and very short-distance use cases.',
          'Major limitations include a strong DC component, poor noise immunity compared with balanced schemes, and weak synchronization during long runs of identical bits.'
        ],
      },
    ],
    imagePrompts: ['Unipolar NRZ waveform for sample bit stream', 'Comparison of Unipolar NRZ and baseline timing recovery'],
  },
  'line-coding/polar': {
    title: 'Polar Line Coding',
    subtitle: 'Balanced positive and negative signaling schemes',
    overview:
      'Polar line coding uses both positive and negative voltage levels, reducing DC bias and improving representation flexibility for digital transmission.',
    objectives: [
      'Differentiate NRZ-L and NRZ-I within polar signaling',
      'Understand RZ pulse behavior and trade-offs',
      'Compare Manchester and Differential Manchester biphase techniques',
    ],
    sections: [
      {
        title: 'Included Schemes: NRZ-L, NRZ-I, RZ',
        body: [
          'NRZ-L maps bit values directly to level polarity, while NRZ-I uses transitions to represent one of the bit values, improving tolerance to polarity inversion in some contexts.',
          'RZ (Return-to-Zero) introduces a mid-bit return toward zero level, which improves timing information at the cost of increased bandwidth usage.'
        ],
      },
      {
        title: 'Biphase Family: Manchester and Differential Manchester',
        body: [
          'Manchester guarantees a transition in the middle of every bit period, combining data and clock information in the same waveform.',
          'Differential Manchester preserves mid-bit transitions for clocking while using presence or absence of edge transitions at bit boundaries to encode data, improving robustness to line polarity changes.'
        ],
      },
    ],
    imagePrompts: ['Polar NRZ-L, NRZ-I, and RZ waveform comparison', 'Manchester vs Differential Manchester timing diagram'],
  },
  'line-coding/bipolar': {
    title: 'Bipolar Line Coding',
    subtitle: 'Three-level signaling with alternating mark polarity',
    overview:
      'Bipolar techniques use three levels and alternate pulse polarity for active symbols, reducing DC content and enabling simple error awareness in practical links.',
    objectives: [
      'Explain Alternate Mark Inversion (AMI) encoding logic',
      'Describe pseudoternary mapping and how it differs from AMI',
      'Understand why bipolar signaling improves balance versus unipolar schemes',
    ],
    sections: [
      {
        title: 'Included Schemes: AMI and Pseudoternary',
        body: [
          'In AMI, binary 0 is represented by zero voltage and binary 1 is represented by alternating positive and negative pulses, preventing a persistent DC shift.',
          'Pseudoternary reverses this idea: binary 1 becomes zero voltage and binary 0 alternates between positive and negative pulses.'
        ],
      },
      {
        title: 'Operational Characteristics',
        body: [
          'Alternating polarity helps maintain signal balance and supports transformer-coupled transmission media in many telecommunication systems.',
          'Specific bipolar violations can also be detected and used as control signals in enhanced variants, making bipolar coding historically important in digital trunks.'
        ],
      },
    ],
    imagePrompts: ['AMI waveform with alternating marks', 'AMI and pseudoternary side-by-side encoding example'],
  },
  'line-coding/multilevel': {
    title: 'Multilevel Line Coding',
    subtitle: 'Higher bit density using multiple amplitude states',
    overview:
      'Multilevel line coding increases data efficiency by encoding multiple bits per symbol through a larger set of signal levels or coordinated channel dimensions.',
    objectives: [
      'Understand why multilevel schemes improve spectral efficiency',
      'Identify how 2B1Q, 8B6T, and 4D-PAM5 map data into symbols',
      'Recognize design trade-offs involving noise tolerance and receiver complexity',
    ],
    sections: [
      {
        title: 'Included Schemes: 2B1Q and 8B6T',
        body: [
          '2B1Q maps 2 bits into one quaternary symbol, reducing baud rate for the same bit rate and improving transmission efficiency on suitable channels.',
          '8B6T encodes 8 bits into 6 ternary symbols, balancing bandwidth and coding constraints with careful symbol selection.'
        ],
      },
      {
        title: 'Included Scheme: 4D-PAM5',
        body: [
          '4D-PAM5 uses five amplitude levels across four coordinated dimensions (typically twisted pairs) to achieve high throughput while controlling crosstalk and error behavior.',
          'This scheme illustrates how modern physical layers combine coding, signaling geometry, and error control to reach higher Ethernet-class data rates.'
        ],
      },
    ],
    imagePrompts: ['2B1Q and 8B6T symbol mapping table', '4D-PAM5 conceptual constellation across paired channels'],
  },
  'line-coding/multitransition': {
    title: 'Multitransition Line Coding',
    subtitle: 'Transition-constrained signaling with MLT-3',
    overview:
      'Multitransition coding focuses on controlled level transitions to reduce high-frequency content while preserving reliable data transmission on practical copper media.',
    objectives: [
      'Understand the MLT-3 state sequence and transition rule',
      'See why MLT-3 reduces required signaling bandwidth',
      'Connect MLT-3 usage with high-speed LAN physical layers',
    ],
    sections: [
      {
        title: 'Included Scheme: MLT-3',
        body: [
          'MLT-3 cycles through three levels (positive, zero, negative) only when a specific bit condition triggers a transition; otherwise, it holds the current level.',
          'By spreading transitions over multiple states, MLT-3 lowers the highest fundamental frequency compared with simple binary toggling for equivalent bit streams.'
        ],
      },
      {
        title: 'Engineering Perspective',
        body: [
          'Lower spectral content helps reduce electromagnetic emissions and supports operation over channel conditions where high-frequency attenuation is a concern.',
          'MLT-3 is commonly discussed alongside scramblers and block coding in physical layer designs where transition statistics matter for timing and signal integrity.'
        ],
      },
    ],
    imagePrompts: ['MLT-3 waveform state progression', 'Frequency-content comparison between NRZ and MLT-3'],
  },
};

export const guidelineTopicContent: Record<string, TopicPageContent> = {
  typography: {
    title: 'Typography Guidelines',
    subtitle: 'Readable, consistent text hierarchy for learning content',
    overview:
      'Typography defines how information is scanned, understood, and remembered. A clear hierarchy improves accessibility and comprehension.',
    objectives: [
      'Maintain heading and body text hierarchy',
      'Keep line length and spacing readable',
      'Apply consistent emphasis patterns',
    ],
    sections: [
      {
        title: 'Hierarchy and Scale',
        body: [
          'Use distinct heading sizes to separate page-level, section-level, and subsection-level content. Body text should remain comfortable for long-form reading.',
          'Avoid abrupt jumps in size that confuse content structure.'
        ],
      },
      {
        title: 'Readability Rules',
        body: [
          'Use sufficient contrast, balanced line-height, and predictable spacing between text blocks. Keep paragraphs concise and focused on one idea.',
          'Use emphasis sparingly with weight and color to preserve visual clarity.'
        ],
      },
    ],
    imagePrompts: ['Typography scale reference', 'Before/after readability comparison'],
  },
  colors: {
    title: 'Color Guidelines',
    subtitle: 'Consistent accent usage and semantic color meaning',
    overview:
      'Color should communicate hierarchy and meaning while remaining consistent with the design system and accessible contrast targets.',
    objectives: [
      'Use accent colors for focus and callouts',
      'Apply semantic colors consistently',
      'Preserve readability in light and dark themes',
    ],
    sections: [
      {
        title: 'Accent and Semantic Use',
        body: [
          'Primary accent colors should highlight important actions, headings, and key visual anchors. Semantic colors (success, warning, error) should convey state clearly.',
          'Do not overload screens with too many competing accent tones.'
        ],
      },
      {
        title: 'Contrast and Accessibility',
        body: [
          'Ensure text and interactive elements meet contrast expectations in both themes. Test with real content, not only sample palettes.',
          'Use neutral backgrounds to support clarity and reduce visual noise in dense learning pages.'
        ],
      },
    ],
    imagePrompts: ['Color token usage chart', 'Accessible contrast examples'],
  },
};
