# Nltk Documentation
> Scraped on: 2026-03-30 | Root Source: [https://www.nltk.org/](https://www.nltk.org/)



---

## Source: https://www.nltk.org/

# Natural Language Toolkit[¶](#natural-language-toolkit)

NLTK is a leading platform for building Python programs to work with human language data.
It provides easy-to-use interfaces to [over 50 corpora and lexical
resources](https://www.nltk.org/nltk_data/) such as WordNet,
along with a suite of text processing libraries for classification, tokenization, stemming, tagging, parsing, and semantic reasoning,
wrappers for industrial-strength NLP libraries,
and an active [discussion forum](https://groups.google.com/group/nltk-users).

Thanks to a hands-on guide introducing programming fundamentals alongside topics in computational linguistics, plus comprehensive API documentation, NLTK is suitable for linguists, engineers, students, educators, researchers, and industry users alike. NLTK is available for Windows, macOS, and Linux. Best of all, NLTK is a free, open source, community-driven project.

NLTK has been called “a wonderful tool for teaching, and working in, computational linguistics using Python,” and “an amazing library to play with natural language.”

[Natural Language Processing with Python](https://www.nltk.org/book/) provides a practical
introduction to programming for language processing.
Written by the creators of NLTK, it guides the reader through the fundamentals
of writing Python programs, working with corpora, categorizing text, analyzing linguistic structure,
and more.
The online version of the book has been been updated for Python 3 and NLTK 3.
(The original Python 2 version is still available at [https://www.nltk.org/book_1ed](https://www.nltk.org/book_1ed).)

## Some simple things you can do with NLTK[¶](#some-simple-things-you-can-do-with-nltk)

Tokenize and tag some text:

```
>>> import nltk
>>> sentence = """At eight o'clock on Thursday morning
... Arthur didn't feel very good."""
>>> tokens = nltk.word_tokenize(sentence)
>>> tokens
['At', 'eight', "o'clock", 'on', 'Thursday', 'morning',
'Arthur', 'did', "n't", 'feel', 'very', 'good', '.']
>>> tagged = nltk.pos_tag(tokens)
>>> tagged[0:6]
[('At', 'IN'), ('eight', 'CD'), ("o'clock", 'JJ'), ('on', 'IN'),
('Thursday', 'NNP'), ('morning', 'NN')]
```

Identify named entities:

```
>>> entities = nltk.chunk.ne_chunk(tagged)
>>> entities
Tree('S', [('At', 'IN'), ('eight', 'CD'), ("o'clock", 'JJ'),
('on', 'IN'), ('Thursday', 'NNP'), ('morning', 'NN'),
Tree('PERSON', [('Arthur', 'NNP')]),
('did', 'VBD'), ("n't", 'RB'), ('feel', 'VB'),
('very', 'RB'), ('good', 'JJ'), ('.', '.')])
```

Display a parse tree:

```
>>> from nltk.corpus import treebank
>>> t = treebank.parsed_sents('wsj_0001.mrg')[0]
>>> t.draw()
```

NB. If you publish work that uses NLTK, please cite the NLTK book as follows:

Bird, Steven, Edward Loper and Ewan Klein (2009),

Natural Language Processing with Python. O’Reilly Media Inc.

---

## Source: https://www.nltk.org/api/nltk.html

# nltk package[¶](#nltk-package)

## Subpackages[¶](#subpackages)

[nltk.app package](nltk.app.html)[nltk.ccg package](nltk.ccg.html)[Submodules](nltk.ccg.html#submodules)[nltk.ccg.api module](nltk.ccg.api.html)[nltk.ccg.chart module](nltk.ccg.chart.html)[nltk.ccg.combinator module](nltk.ccg.combinator.html)`BackwardCombinator`

`DirectedBinaryCombinator`

`ForwardCombinator`

`UndirectedBinaryCombinator`

`UndirectedComposition`

`UndirectedFunctionApplication`

`UndirectedSubstitution`

`UndirectedTypeRaise`

`backwardBxConstraint()`

`backwardOnly()`

`backwardSxConstraint()`

`backwardTConstraint()`

`bothBackward()`

`bothForward()`

`crossedDirs()`

`forwardOnly()`

`forwardSConstraint()`

`forwardTConstraint()`

`innermostFunction()`


[nltk.ccg.lexicon module](nltk.ccg.lexicon.html)[nltk.ccg.logic module](nltk.ccg.logic.html)

[Module contents](nltk.ccg.html#module-nltk.ccg)

[nltk.chat package](nltk.chat.html)[nltk.chunk package](nltk.chunk.html)[nltk.classify package](nltk.classify.html)[Submodules](nltk.classify.html#submodules)[nltk.classify.api module](nltk.classify.api.html)[nltk.classify.decisiontree module](nltk.classify.decisiontree.html)[nltk.classify.maxent module](nltk.classify.maxent.html)[Terminology: ‘feature’](nltk.classify.maxent.html#terminology-feature)`BinaryMaxentFeatureEncoding`

`ConditionalExponentialClassifier`

`FunctionBackedMaxentFeatureEncoding`

`GISEncoding`

`MaxentClassifier`

`MaxentFeatureEncodingI`

`TadmEventMaxentFeatureEncoding`

`TadmMaxentClassifier`

`TypedMaxentFeatureEncoding`

`calculate_deltas()`

`calculate_empirical_fcount()`

`calculate_estimated_fcount()`

`calculate_nfmap()`

`demo()`

`load_maxent_params()`

`maxent_pos_tagger()`

`save_maxent_params()`

`train_maxent_classifier_with_gis()`

`train_maxent_classifier_with_iis()`

`train_maxent_classifier_with_megam()`


[nltk.classify.megam module](nltk.classify.megam.html)[nltk.classify.naivebayes module](nltk.classify.naivebayes.html)[nltk.classify.positivenaivebayes module](nltk.classify.positivenaivebayes.html)[nltk.classify.rte_classify module](nltk.classify.rte_classify.html)[nltk.classify.scikitlearn module](nltk.classify.scikitlearn.html)[nltk.classify.senna module](nltk.classify.senna.html)[nltk.classify.svm module](nltk.classify.svm.html)[nltk.classify.tadm module](nltk.classify.tadm.html)[nltk.classify.textcat module](nltk.classify.textcat.html)[nltk.classify.util module](nltk.classify.util.html)[nltk.classify.weka module](nltk.classify.weka.html)

[Module contents](nltk.classify.html#module-nltk.classify)

[nltk.cluster package](nltk.cluster.html)[nltk.corpus package](nltk.corpus.html)[nltk.draw package](nltk.draw.html)[nltk.inference package](nltk.inference.html)[nltk.lm package](nltk.lm.html)[Submodules](nltk.lm.html#submodules)[Module contents](nltk.lm.html#module-nltk.lm)

[nltk.metrics package](nltk.metrics.html)[nltk.misc package](nltk.misc.html)[nltk.parse package](nltk.parse.html)[Submodules](nltk.parse.html#submodules)[nltk.parse.api module](nltk.parse.api.html)[nltk.parse.bllip module](nltk.parse.bllip.html)[nltk.parse.chart module](nltk.parse.chart.html)`AbstractChartRule`

`BottomUpChartParser`

`BottomUpLeftCornerChartParser`

`BottomUpPredictCombineRule`

`BottomUpPredictRule`

`CachedTopDownPredictRule`

`Chart`

`ChartParser`

`ChartRuleI`

`EdgeI`

`EmptyPredictRule`

`FilteredBottomUpPredictCombineRule`

`FilteredSingleEdgeFundamentalRule`

`FundamentalRule`

`LeafEdge`

`LeafInitRule`

`LeftCornerChartParser`

`SingleEdgeFundamentalRule`

`SteppingChartParser`

`TopDownChartParser`

`TopDownInitRule`

`TopDownPredictRule`

`TreeEdge`

`demo()`

`demo_grammar()`


[nltk.parse.corenlp module](nltk.parse.corenlp.html)[nltk.parse.dependencygraph module](nltk.parse.dependencygraph.html)[nltk.parse.earleychart module](nltk.parse.earleychart.html)`CompleteFundamentalRule`

`CompleterRule`

`EarleyChartParser`

`FeatureCompleteFundamentalRule`

`FeatureCompleterRule`

`FeatureEarleyChartParser`

`FeatureIncrementalBottomUpChartParser`

`FeatureIncrementalBottomUpLeftCornerChartParser`

`FeatureIncrementalChart`

`FeatureIncrementalChartParser`

`FeatureIncrementalTopDownChartParser`

`FeaturePredictorRule`

`FeatureScannerRule`

`FilteredCompleteFundamentalRule`

`IncrementalBottomUpChartParser`

`IncrementalBottomUpLeftCornerChartParser`

`IncrementalChart`

`IncrementalChartParser`

`IncrementalLeftCornerChartParser`

`IncrementalTopDownChartParser`

`PredictorRule`

`ScannerRule`

`demo()`


[nltk.parse.evaluate module](nltk.parse.evaluate.html)[nltk.parse.featurechart module](nltk.parse.featurechart.html)`FeatureBottomUpChartParser`

`FeatureBottomUpLeftCornerChartParser`

`FeatureBottomUpPredictCombineRule`

`FeatureBottomUpPredictRule`

`FeatureChart`

`FeatureChartParser`

`FeatureEmptyPredictRule`

`FeatureFundamentalRule`

`FeatureSingleEdgeFundamentalRule`

`FeatureTopDownChartParser`

`FeatureTopDownInitRule`

`FeatureTopDownPredictRule`

`FeatureTreeEdge`

`InstantiateVarsChart`

`demo()`

`demo_grammar()`

`run_profile()`


[nltk.parse.generate module](nltk.parse.generate.html)[nltk.parse.malt module](nltk.parse.malt.html)[nltk.parse.nonprojectivedependencyparser module](nltk.parse.nonprojectivedependencyparser.html)[nltk.parse.pchart module](nltk.parse.pchart.html)[nltk.parse.projectivedependencyparser module](nltk.parse.projectivedependencyparser.html)[nltk.parse.recursivedescent module](nltk.parse.recursivedescent.html)[nltk.parse.shiftreduce module](nltk.parse.shiftreduce.html)[nltk.parse.stanford module](nltk.parse.stanford.html)[nltk.parse.transitionparser module](nltk.parse.transitionparser.html)[nltk.parse.util module](nltk.parse.util.html)[nltk.parse.viterbi module](nltk.parse.viterbi.html)

[Module contents](nltk.parse.html#module-nltk.parse)

[nltk.sem package](nltk.sem.html)[Submodules](nltk.sem.html#submodules)[nltk.sem.boxer module](nltk.sem.boxer.html)[nltk.sem.chat80 module](nltk.sem.chat80.html)[nltk.sem.cooper_storage module](nltk.sem.cooper_storage.html)[nltk.sem.drt module](nltk.sem.drt.html)`AnaphoraResolutionException`

`DRS`

`DrsDrawer`

`DrtAbstractVariableExpression`

`DrtApplicationExpression`

`DrtBinaryExpression`

`DrtBooleanExpression`

`DrtConcatenation`

`DrtConstantExpression`

`DrtEqualityExpression`

`DrtEventVariableExpression`

`DrtExpression`

`DrtFunctionVariableExpression`

`DrtIndividualVariableExpression`

`DrtLambdaExpression`

`DrtNegatedExpression`

`DrtOrExpression`

`DrtParser`

`DrtProposition`

`DrtTokens`

`DrtVariableExpression()`

`PossibleAntecedents`

`demo()`

`resolve_anaphora()`

`test_draw()`


[nltk.sem.drt_glue_demo module](nltk.sem.drt_glue_demo.html)[nltk.sem.evaluate module](nltk.sem.evaluate.html)[nltk.sem.glue module](nltk.sem.glue.html)[nltk.sem.hole module](nltk.sem.hole.html)[nltk.sem.lfg module](nltk.sem.lfg.html)[nltk.sem.linearlogic module](nltk.sem.linearlogic.html)[nltk.sem.logic module](nltk.sem.logic.html)`AbstractVariableExpression`

`AllExpression`

`AndExpression`

`AnyType`

`ApplicationExpression`

`BasicType`

`BinaryExpression`

`BooleanExpression`

`ComplexType`

`ConstantExpression`

`EntityType`

`EqualityExpression`

`EventType`

`EventVariableExpression`

`ExistsExpression`

`ExpectedMoreTokensException`

`Expression`

`FunctionVariableExpression`

`IffExpression`

`IllegalTypeException`

`ImpExpression`

`InconsistentTypeHierarchyException`

`IndividualVariableExpression`

`IotaExpression`

`LambdaExpression`

`LogicParser`

`LogicalExpressionException`

`NegatedExpression`

`OrExpression`

`QuantifiedExpression`

`SubstituteBindingsI`

`Tokens`

`TruthValueType`

`Type`

`TypeException`

`TypeResolutionException`

`UnexpectedTokenException`

`Variable`

`VariableBinderExpression`

`VariableExpression()`

`binding_ops()`

`boolean_ops()`

`demo()`

`demoException()`

`demo_errors()`

`equality_preds()`

`is_eventvar()`

`is_funcvar()`

`is_indvar()`

`printtype()`

`read_logic()`

`read_type()`

`skolem_function()`

`typecheck()`

`unique_variable()`


[nltk.sem.relextract module](nltk.sem.relextract.html)[nltk.sem.skolemize module](nltk.sem.skolemize.html)[nltk.sem.util module](nltk.sem.util.html)

[Module contents](nltk.sem.html#module-nltk.sem)

[nltk.sentiment package](nltk.sentiment.html)[nltk.stem package](nltk.stem.html)[Submodules](nltk.stem.html#submodules)[Module contents](nltk.stem.html#module-nltk.stem)

[nltk.tag package](nltk.tag.html)[Submodules](nltk.tag.html#submodules)[nltk.tag.api module](nltk.tag.api.html)[nltk.tag.brill module](nltk.tag.brill.html)[nltk.tag.brill_trainer module](nltk.tag.brill_trainer.html)[nltk.tag.crf module](nltk.tag.crf.html)[nltk.tag.hmm module](nltk.tag.hmm.html)[nltk.tag.hunpos module](nltk.tag.hunpos.html)[nltk.tag.mapping module](nltk.tag.mapping.html)[nltk.tag.perceptron module](nltk.tag.perceptron.html)[nltk.tag.senna module](nltk.tag.senna.html)[nltk.tag.sequential module](nltk.tag.sequential.html)[nltk.tag.stanford module](nltk.tag.stanford.html)[nltk.tag.tnt module](nltk.tag.tnt.html)[nltk.tag.util module](nltk.tag.util.html)

[Module contents](nltk.tag.html#module-nltk.tag)

[nltk.tbl package](nltk.tbl.html)[Submodules](nltk.tbl.html#submodules)[nltk.tbl.api module](nltk.tbl.api.html)[nltk.tbl.demo module](nltk.tbl.demo.html)`corpus_size()`

`demo()`

`demo_error_analysis()`

`demo_generated_templates()`

`demo_high_accuracy_rules()`

`demo_learning_curve()`

`demo_multifeature_template()`

`demo_multiposition_feature()`

`demo_repr_rule_format()`

`demo_serialize_tagger()`

`demo_str_rule_format()`

`demo_template_statistics()`

`demo_verbose_rule_format()`

`postag()`


[nltk.tbl.erroranalysis module](nltk.tbl.erroranalysis.html)[nltk.tbl.feature module](nltk.tbl.feature.html)[nltk.tbl.rule module](nltk.tbl.rule.html)[nltk.tbl.template module](nltk.tbl.template.html)

[Module contents](nltk.tbl.html#module-nltk.tbl)

[nltk.tokenize package](nltk.tokenize.html)[Submodules](nltk.tokenize.html#submodules)[nltk.tokenize.api module](nltk.tokenize.api.html)[nltk.tokenize.casual module](nltk.tokenize.casual.html)[nltk.tokenize.destructive module](nltk.tokenize.destructive.html)[nltk.tokenize.legality_principle module](nltk.tokenize.legality_principle.html)[nltk.tokenize.mwe module](nltk.tokenize.mwe.html)[nltk.tokenize.nist module](nltk.tokenize.nist.html)[nltk.tokenize.punkt module](nltk.tokenize.punkt.html)[nltk.tokenize.regexp module](nltk.tokenize.regexp.html)[nltk.tokenize.repp module](nltk.tokenize.repp.html)[nltk.tokenize.sexpr module](nltk.tokenize.sexpr.html)[nltk.tokenize.simple module](nltk.tokenize.simple.html)[nltk.tokenize.sonority_sequencing module](nltk.tokenize.sonority_sequencing.html)[nltk.tokenize.stanford module](nltk.tokenize.stanford.html)[nltk.tokenize.stanford_segmenter module](nltk.tokenize.stanford_segmenter.html)[nltk.tokenize.texttiling module](nltk.tokenize.texttiling.html)[nltk.tokenize.toktok module](nltk.tokenize.toktok.html)[nltk.tokenize.treebank module](nltk.tokenize.treebank.html)[nltk.tokenize.util module](nltk.tokenize.util.html)

[Module contents](nltk.tokenize.html#module-nltk.tokenize)

[nltk.translate package](nltk.translate.html)[Submodules](nltk.translate.html#submodules)[nltk.translate.api module](nltk.translate.api.html)[nltk.translate.bleu_score module](nltk.translate.bleu_score.html)[nltk.translate.chrf_score module](nltk.translate.chrf_score.html)[nltk.translate.gale_church module](nltk.translate.gale_church.html)[nltk.translate.gdfa module](nltk.translate.gdfa.html)[nltk.translate.gleu_score module](nltk.translate.gleu_score.html)[nltk.translate.ibm1 module](nltk.translate.ibm1.html)[nltk.translate.ibm2 module](nltk.translate.ibm2.html)[nltk.translate.ibm3 module](nltk.translate.ibm3.html)[nltk.translate.ibm4 module](nltk.translate.ibm4.html)[nltk.translate.ibm5 module](nltk.translate.ibm5.html)[nltk.translate.ibm_model module](nltk.translate.ibm_model.html)[nltk.translate.lepor module](nltk.translate.lepor.html)[nltk.translate.meteor_score module](nltk.translate.meteor_score.html)[nltk.translate.metrics module](nltk.translate.metrics.html)[nltk.translate.nist_score module](nltk.translate.nist_score.html)[nltk.translate.phrase_based module](nltk.translate.phrase_based.html)[nltk.translate.ribes_score module](nltk.translate.ribes_score.html)[nltk.translate.stack_decoder module](nltk.translate.stack_decoder.html)

[Module contents](nltk.translate.html#module-nltk.translate)

[nltk.tree package](nltk.tree.html)[Submodules](nltk.tree.html#submodules)[Module contents](nltk.tree.html#module-nltk.tree)`ImmutableMultiParentedTree`

`ImmutableParentedTree`

`ImmutableProbabilisticTree`

`ImmutableTree`

`MultiParentedTree`

`ParentedTree`

`ProbabilisticTree`

`Tree`

`Tree.__init__()`

`Tree.chomsky_normal_form()`

`Tree.collapse_unary()`

`Tree.convert()`

`Tree.copy()`

`Tree.draw()`

`Tree.flatten()`

`Tree.freeze()`

`Tree.fromlist()`

`Tree.fromstring()`

`Tree.height()`

`Tree.label()`

`Tree.leaf_treeposition()`

`Tree.leaves()`

`Tree.node`

`Tree.pformat()`

`Tree.pformat_latex_qtree()`

`Tree.pos()`

`Tree.pprint()`

`Tree.pretty_print()`

`Tree.productions()`

`Tree.set_label()`

`Tree.subtrees()`

`Tree.treeposition_spanning_leaves()`

`Tree.treepositions()`

`Tree.un_chomsky_normal_form()`


`TreePrettyPrinter`

`bracket_parse()`

`chomsky_normal_form()`

`collapse_unary()`

`sinica_parse()`

`un_chomsky_normal_form()`



[nltk.twitter package](nltk.twitter.html)

## Submodules[¶](#submodules)

[nltk.book module](nltk.book.html)[nltk.cli module](nltk.cli.html)[nltk.collections module](nltk.collections.html)[nltk.collocations module](nltk.collocations.html)[nltk.compat module](nltk.compat.html)[nltk.data module](nltk.data.html)`AUTO_FORMATS`

`BufferedGzipFile()`

`FORMATS`

`FileSystemPathPointer`

`GzipFileSystemPathPointer`

`LazyLoader`

`OpenOnDemandZipFile`

`PathPointer`

`SeekableUnicodeStreamReader`

`SeekableUnicodeStreamReader.DEBUG`

`SeekableUnicodeStreamReader.__init__()`

`SeekableUnicodeStreamReader.bytebuffer`

`SeekableUnicodeStreamReader.char_seek_forward()`

`SeekableUnicodeStreamReader.close()`

`SeekableUnicodeStreamReader.closed`

`SeekableUnicodeStreamReader.decode`

`SeekableUnicodeStreamReader.discard_line()`

`SeekableUnicodeStreamReader.encoding`

`SeekableUnicodeStreamReader.errors`

`SeekableUnicodeStreamReader.linebuffer`

`SeekableUnicodeStreamReader.mode`

`SeekableUnicodeStreamReader.name`

`SeekableUnicodeStreamReader.next()`

`SeekableUnicodeStreamReader.read()`

`SeekableUnicodeStreamReader.readline()`

`SeekableUnicodeStreamReader.readlines()`

`SeekableUnicodeStreamReader.seek()`

`SeekableUnicodeStreamReader.stream`

`SeekableUnicodeStreamReader.tell()`

`SeekableUnicodeStreamReader.xreadlines()`


`clear_cache()`

`find()`

`load()`

`path`

`retrieve()`

`show_cfg()`


[nltk.decorators module](nltk.decorators.html)[nltk.downloader module](nltk.downloader.html)[Downloading Packages](nltk.downloader.html#downloading-packages)[Download Directory](nltk.downloader.html#download-directory)[NLTK Download Server](nltk.downloader.html#nltk-download-server)`Collection`

`Downloader`

`Downloader.DEFAULT_URL`

`Downloader.INDEX_TIMEOUT`

`Downloader.INSTALLED`

`Downloader.NOT_INSTALLED`

`Downloader.PARTIAL`

`Downloader.STALE`

`Downloader.__init__()`

`Downloader.clear_status_cache()`

`Downloader.collections()`

`Downloader.corpora()`

`Downloader.default_download_dir()`

`Downloader.download()`

`Downloader.download_dir`

`Downloader.incr_download()`

`Downloader.index()`

`Downloader.info()`

`Downloader.is_installed()`

`Downloader.is_stale()`

`Downloader.list()`

`Downloader.models()`

`Downloader.packages()`

`Downloader.status()`

`Downloader.update()`

`Downloader.url`

`Downloader.xmlinfo()`


`DownloaderGUI`

`DownloaderMessage`

`DownloaderShell`

`ErrorMessage`

`FinishCollectionMessage`

`FinishDownloadMessage`

`FinishPackageMessage`

`FinishUnzipMessage`

`Package`

`ProgressMessage`

`SelectDownloadDirMessage`

`StaleMessage`

`StartCollectionMessage`

`StartDownloadMessage`

`StartPackageMessage`

`StartUnzipMessage`

`UpToDateMessage`

`build_index()`

`download()`

`download_gui()`

`download_shell()`

`md5_hexdigest()`

`sha256_hexdigest()`

`unzip()`

`update()`


[nltk.featstruct module](nltk.featstruct.html)[Lightweight Feature Structures](nltk.featstruct.html#lightweight-feature-structures)`FeatDict`

`FeatList`

`FeatStruct`

`FeatStruct.__new__()`

`FeatStruct.copy()`

`FeatStruct.cyclic()`

`FeatStruct.equal_values()`

`FeatStruct.freeze()`

`FeatStruct.frozen()`

`FeatStruct.remove_variables()`

`FeatStruct.rename_variables()`

`FeatStruct.retract_bindings()`

`FeatStruct.substitute_bindings()`

`FeatStruct.subsumes()`

`FeatStruct.unify()`

`FeatStruct.variables()`

`FeatStruct.walk()`


`FeatStructReader`

`FeatStructReader.VALUE_HANDLERS`

`FeatStructReader.__init__()`

`FeatStructReader.fromstring()`

`FeatStructReader.read_app_value()`

`FeatStructReader.read_fstruct_value()`

`FeatStructReader.read_int_value()`

`FeatStructReader.read_logic_value()`

`FeatStructReader.read_partial()`

`FeatStructReader.read_set_value()`

`FeatStructReader.read_str_value()`

`FeatStructReader.read_sym_value()`

`FeatStructReader.read_tuple_value()`

`FeatStructReader.read_value()`

`FeatStructReader.read_var_value()`


`Feature`

`RangeFeature`

`SlashFeature`

`conflicts()`

`subsumes()`

`unify()`


[nltk.grammar module](nltk.grammar.html)`CFG`

`CFG.__init__()`

`CFG.binarize()`

`CFG.check_coverage()`

`CFG.chomsky_normal_form()`

`CFG.eliminate_start()`

`CFG.fromstring()`

`CFG.is_binarised()`

`CFG.is_chomsky_normal_form()`

`CFG.is_flexible_chomsky_normal_form()`

`CFG.is_leftcorner()`

`CFG.is_lexical()`

`CFG.is_nonempty()`

`CFG.is_nonlexical()`

`CFG.leftcorner_parents()`

`CFG.leftcorners()`

`CFG.max_len()`

`CFG.min_len()`

`CFG.productions()`

`CFG.remove_mixed_rules()`

`CFG.remove_unitary_rules()`

`CFG.start()`


`DependencyGrammar`

`DependencyProduction`

`Nonterminal`

`PCFG`

`ProbabilisticDependencyGrammar`

`ProbabilisticProduction`

`Production`

`induce_pcfg()`

`nonterminals()`

`read_grammar()`


[nltk.help module](nltk.help.html)[nltk.internals module](nltk.internals.html)`Counter`

`Deprecated`

`ElementWrapper`

`ReadError`

`config_java()`

`deprecated()`

`find_binary()`

`find_binary_iter()`

`find_dir()`

`find_file()`

`find_file_iter()`

`find_jar()`

`find_jar_iter()`

`find_jars_within_path()`

`import_from_stdlib()`

`is_writable()`

`java()`

`overridden()`

`raise_unorderable_types()`

`read_int()`

`read_number()`

`read_str()`

`slice_bounds()`


[nltk.jsontags module](nltk.jsontags.html)[nltk.langnames module](nltk.langnames.html)[nltk.lazyimport module](nltk.lazyimport.html)[nltk.probability module](nltk.probability.html)`ConditionalFreqDist`

`ConditionalProbDist`

`ConditionalProbDistI`

`CrossValidationProbDist`

`DictionaryConditionalProbDist`

`DictionaryProbDist`

`ELEProbDist`

`FreqDist`

`HeldoutProbDist`

`ImmutableProbabilisticMixIn`

`KneserNeyProbDist`

`LaplaceProbDist`

`LidstoneProbDist`

`MLEProbDist`

`MutableProbDist`

`ProbDistI`

`ProbabilisticMixIn`

`SimpleGoodTuringProbDist`

`SimpleGoodTuringProbDist.SUM_TO_ONE`

`SimpleGoodTuringProbDist.__init__()`

`SimpleGoodTuringProbDist.check()`

`SimpleGoodTuringProbDist.discount()`

`SimpleGoodTuringProbDist.find_best_fit()`

`SimpleGoodTuringProbDist.freqdist()`

`SimpleGoodTuringProbDist.max()`

`SimpleGoodTuringProbDist.prob()`

`SimpleGoodTuringProbDist.samples()`

`SimpleGoodTuringProbDist.smoothedNr()`


`UniformProbDist`

`WittenBellProbDist`

`add_logs()`

`entropy()`

`log_likelihood()`

`sum_logs()`


[nltk.tabdata module](nltk.tabdata.html)[nltk.text module](nltk.text.html)[nltk.tgrep module](nltk.tgrep.html)[nltk.toolbox module](nltk.toolbox.html)[nltk.treeprettyprinter module](nltk.treeprettyprinter.html)[nltk.treetransforms module](nltk.treetransforms.html)[nltk.util module](nltk.util.html)`Index`

`acyclic_branches_depth_first()`

`acyclic_breadth_first()`

`acyclic_depth_first()`

`acyclic_dic2tree()`

`bigrams()`

`binary_search_file()`

`breadth_first()`

`choose()`

`clean_html()`

`clean_url()`

`cut_string()`

`edge_closure()`

`edges2dot()`

`elementtree_indent()`

`everygrams()`

`filestring()`

`flatten()`

`guess_encoding()`

`in_idle()`

`invert_dict()`

`invert_graph()`

`ngrams()`

`pad_sequence()`

`pairwise()`

`parallelize_preprocess()`

`pr()`

`print_string()`

`re_show()`

`set_proxy()`

`skipgrams()`

`tokenwrap()`

`transitive_closure()`

`trigrams()`

`unique_list()`

`unweighted_minimum_spanning_dict()`

`unweighted_minimum_spanning_digraph()`

`unweighted_minimum_spanning_tree()`


[nltk.wsd module](nltk.wsd.html)

## Module contents[¶](#module-nltk)

The Natural Language Toolkit (NLTK) is an open source Python library for Natural Language Processing. A free online book is available. (If you use the library for academic research, please cite the book.)

Steven Bird, Ewan Klein, and Edward Loper (2009).
Natural Language Processing with Python. O’Reilly Media Inc.
[https://www.nltk.org/book/](https://www.nltk.org/book/)

isort:skip_file

@version: 3.9.2

---

## Source: https://www.nltk.org/howto.html

# Example usage of NLTK modules[¶](#example-usage-of-nltk-modules)

[Sample usage for bleu](howto/bleu.html)[Sample usage for bnc](howto/bnc.html)[Sample usage for ccg](howto/ccg.html)[Sample usage for ccg_semantics](howto/ccg_semantics.html)[Sample usage for chat80](howto/chat80.html)[Sample usage for childes](howto/childes.html)[Sample usage for chunk](howto/chunk.html)[Sample usage for classify](howto/classify.html)[Sample usage for collections](howto/collections.html)[Sample usage for collocations](howto/collocations.html)[Sample usage for concordance](howto/concordance.html)[Sample usage for corpus](howto/corpus.html)[Sample usage for crubadan](howto/crubadan.html)[Sample usage for data](howto/data.html)[Sample usage for dependency](howto/dependency.html)[Sample usage for discourse](howto/discourse.html)[Sample usage for drt](howto/drt.html)[Sample usage for featgram](howto/featgram.html)[Sample usage for featstruct](howto/featstruct.html)[Sample usage for framenet](howto/framenet.html)[Sample usage for generate](howto/generate.html)[Sample usage for gensim](howto/gensim.html)[Sample usage for gluesemantics](howto/gluesemantics.html)[Sample usage for gluesemantics_malt](howto/gluesemantics_malt.html)[Sample usage for grammar](howto/grammar.html)[Sample usage for grammartestsuites](howto/grammartestsuites.html)[Sample usage for inference](howto/inference.html)[Sample usage for internals](howto/internals.html)[Sample usage for japanese](howto/japanese.html)[Sample usage for lm](howto/lm.html)[Sample usage for logic](howto/logic.html)[Sample usage for meteor](howto/meteor.html)[Sample usage for metrics](howto/metrics.html)[Sample usage for misc](howto/misc.html)[Sample usage for nonmonotonic](howto/nonmonotonic.html)[Sample usage for paice](howto/paice.html)[Sample usage for parse](howto/parse.html)[Sample usage for portuguese_en](howto/portuguese_en.html)[Sample usage for probability](howto/probability.html)[Sample usage for propbank](howto/propbank.html)[Sample usage for relextract](howto/relextract.html)[Sample usage for resolution](howto/resolution.html)[Sample usage for semantics](howto/semantics.html)[Sample usage for sentiment](howto/sentiment.html)[Sample usage for sentiwordnet](howto/sentiwordnet.html)[Sample usage for simple](howto/simple.html)[Sample usage for stem](howto/stem.html)[Sample usage for tag](howto/tag.html)[Sample usage for tokenize](howto/tokenize.html)[Sample usage for toolbox](howto/toolbox.html)[Sample usage for translate](howto/translate.html)[Sample usage for tree](howto/tree.html)[Sample usage for treeprettyprinter](howto/treeprettyprinter.html)[Sample usage for treetransforms](howto/treetransforms.html)[Sample usage for util](howto/util.html)[Sample usage for wordnet](howto/wordnet.html)[Sample usage for wordnet_lch](howto/wordnet_lch.html)[Sample usage for wsd](howto/wsd.html)

---

## Source: https://www.nltk.org/py-modindex.html

NLTK Documentation

Installation

More

nltk.app

nltk.app.chartparser_app

nltk.app.chunkparser_app

nltk.app.collocations_app

nltk.app.concordance_app

nltk.app.nemo_app

nltk.app.rdparser_app

nltk.app.srparser_app

nltk.app.wordnet_app

nltk.book

nltk.ccg

nltk.ccg.api

nltk.ccg.chart

nltk.ccg.combinator

nltk.ccg.lexicon

nltk.ccg.logic

nltk.chat

nltk.chat.eliza

nltk.chat.iesha

nltk.chat.rude

nltk.chat.suntsu

nltk.chat.util

nltk.chat.zen

nltk.chunk

nltk.chunk.api

nltk.chunk.named_entity

nltk.chunk.regexp

nltk.chunk.util

nltk.classify

nltk.classify.api

nltk.classify.decisiontree

nltk.classify.maxent

nltk.classify.megam

nltk.classify.naivebayes

nltk.classify.positivenaivebayes

nltk.classify.rte_classify

nltk.classify.scikitlearn

nltk.classify.senna

nltk.classify.svm

nltk.classify.tadm

nltk.classify.textcat

nltk.classify.util

nltk.classify.weka

nltk.cluster

nltk.cluster.api

nltk.cluster.em

nltk.cluster.gaac

nltk.cluster.kmeans

nltk.cluster.util

nltk.collections

nltk.collocations

nltk.compat

nltk.corpus

nltk.corpus.europarl_raw

nltk.corpus.reader

nltk.corpus.reader.aligned

nltk.corpus.reader.api

nltk.corpus.reader.bcp47

nltk.corpus.reader.bnc

nltk.corpus.reader.bracket_parse

nltk.corpus.reader.categorized_sents

nltk.corpus.reader.chasen

nltk.corpus.reader.childes

nltk.corpus.reader.chunked

nltk.corpus.reader.cmudict

nltk.corpus.reader.comparative_sents

nltk.corpus.reader.conll

nltk.corpus.reader.crubadan

nltk.corpus.reader.dependency

nltk.corpus.reader.framenet

nltk.corpus.reader.ieer

nltk.corpus.reader.indian

nltk.corpus.reader.ipipan

nltk.corpus.reader.knbc

nltk.corpus.reader.lin

nltk.corpus.reader.markdown

nltk.corpus.reader.mte

nltk.corpus.reader.nkjp

nltk.corpus.reader.nombank

nltk.corpus.reader.nps_chat

nltk.corpus.reader.opinion_lexicon

nltk.corpus.reader.panlex_lite

nltk.corpus.reader.panlex_swadesh

nltk.corpus.reader.pl196x

nltk.corpus.reader.plaintext

nltk.corpus.reader.ppattach

nltk.corpus.reader.propbank

nltk.corpus.reader.pros_cons

nltk.corpus.reader.reviews

nltk.corpus.reader.rte

nltk.corpus.reader.semcor

nltk.corpus.reader.senseval

nltk.corpus.reader.sentiwordnet

nltk.corpus.reader.sinica_treebank

nltk.corpus.reader.string_category

nltk.corpus.reader.switchboard

nltk.corpus.reader.tagged

nltk.corpus.reader.timit

nltk.corpus.reader.toolbox

nltk.corpus.reader.twitter

nltk.corpus.reader.udhr

nltk.corpus.reader.util

nltk.corpus.reader.verbnet

nltk.corpus.reader.wordlist

nltk.corpus.reader.wordnet

nltk.corpus.reader.xmldocs

nltk.corpus.reader.ycoe

nltk.corpus.util

nltk.data

nltk.decorators

nltk.downloader

nltk.draw

nltk.draw.cfg

nltk.draw.dispersion

nltk.draw.table

nltk.draw.tree

nltk.draw.util

nltk.featstruct

nltk.grammar

nltk.help

nltk.inference

nltk.inference.api

nltk.inference.discourse

nltk.inference.mace

nltk.inference.nonmonotonic

nltk.inference.prover9

nltk.inference.resolution

nltk.inference.tableau

nltk.internals

nltk.jsontags

nltk.langnames

nltk.lazyimport

nltk.lm

nltk.lm.api

nltk.lm.counter

nltk.lm.models

nltk.lm.preprocessing

nltk.lm.smoothing

nltk.lm.util

nltk.lm.vocabulary

nltk.metrics

nltk.metrics.agreement

nltk.metrics.aline

nltk.metrics.association

nltk.metrics.confusionmatrix

nltk.metrics.distance

nltk.metrics.paice

nltk.metrics.scores

nltk.metrics.segmentation

nltk.metrics.spearman

nltk.misc

nltk.misc.babelfish

nltk.misc.chomsky

nltk.misc.minimalset

nltk.misc.sort

nltk.misc.wordfinder

nltk

nltk.parse

nltk.parse.api

nltk.parse.bllip

nltk.parse.chart

nltk.parse.corenlp

nltk.parse.dependencygraph

nltk.parse.earleychart

nltk.parse.evaluate

nltk.parse.featurechart

nltk.parse.generate

nltk.parse.malt

nltk.parse.nonprojectivedependencyparser

nltk.parse.pchart

nltk.parse.projectivedependencyparser

nltk.parse.recursivedescent

nltk.parse.shiftreduce

nltk.parse.stanford

nltk.parse.transitionparser

nltk.parse.util

nltk.parse.viterbi

nltk.probability

nltk.sem

nltk.sem.boxer

nltk.sem.chat80

nltk.sem.cooper_storage

nltk.sem.drt

nltk.sem.drt_glue_demo

nltk.sem.evaluate

nltk.sem.glue

nltk.sem.hole

nltk.sem.lfg

nltk.sem.linearlogic

nltk.sem.logic

nltk.sem.relextract

nltk.sem.skolemize

nltk.sem.util

nltk.sentiment

nltk.sentiment.sentiment_analyzer

nltk.sentiment.util

nltk.sentiment.vader

nltk.stem

nltk.stem.api

nltk.stem.arlstem

nltk.stem.arlstem2

nltk.stem.cistem

nltk.stem.isri

nltk.stem.lancaster

nltk.stem.porter

nltk.stem.regexp

nltk.stem.rslp

nltk.stem.snowball

nltk.stem.util

nltk.stem.wordnet

nltk.tabdata

nltk.tag

nltk.tag.api

nltk.tag.brill

nltk.tag.brill_trainer

nltk.tag.crf

nltk.tag.hmm

nltk.tag.hunpos

nltk.tag.mapping

nltk.tag.perceptron

nltk.tag.senna

nltk.tag.sequential

nltk.tag.stanford

nltk.tag.tnt

nltk.tag.util

nltk.tbl

nltk.tbl.api

nltk.tbl.demo

nltk.tbl.erroranalysis

nltk.tbl.feature

nltk.tbl.rule

nltk.tbl.template

nltk.text

nltk.tgrep

nltk.tokenize

nltk.tokenize.api

nltk.tokenize.casual

nltk.tokenize.destructive

nltk.tokenize.legality_principle

nltk.tokenize.mwe

nltk.tokenize.nist

nltk.tokenize.punkt

nltk.tokenize.regexp

nltk.tokenize.repp

nltk.tokenize.sexpr

nltk.tokenize.simple

nltk.tokenize.sonority_sequencing

nltk.tokenize.stanford

nltk.tokenize.stanford_segmenter

nltk.tokenize.texttiling

nltk.tokenize.toktok

nltk.tokenize.treebank

nltk.tokenize.util

nltk.toolbox

nltk.translate

nltk.translate.api

nltk.translate.bleu_score

nltk.translate.chrf_score

nltk.translate.gale_church

nltk.translate.gdfa

nltk.translate.gleu_score

nltk.translate.ibm1

nltk.translate.ibm2

nltk.translate.ibm3

nltk.translate.ibm4

nltk.translate.ibm5

nltk.translate.ibm_model

nltk.translate.lepor

nltk.translate.meteor_score

nltk.translate.metrics

nltk.translate.nist_score

nltk.translate.phrase_based

nltk.translate.ribes_score

nltk.translate.stack_decoder

nltk.tree

nltk.tree.immutable

nltk.tree.parented

nltk.tree.parsing

nltk.tree.prettyprinter

nltk.tree.probabilistic

nltk.tree.transforms

nltk.tree.tree

nltk.treeprettyprinter

nltk.treetransforms

nltk.twitter

nltk.twitter.api

nltk.twitter.common

nltk.util

nltk.wsd

---

## Source: https://www.nltk.org/install.html

# Installing NLTK[¶](#installing-nltk)

NLTK requires Python versions 3.9, 3.10, 3.11, 3.12 or 3.13.

For Windows users, it is strongly recommended that you go through this guide to install Python 3 successfully [https://docs.python-guide.org/starting/install3/win/#install3-windows](https://docs.python-guide.org/starting/install3/win/#install3-windows)

## Setting up a Python Environment (Mac/Unix/Windows)[¶](#setting-up-a-python-environment-mac-unix-windows)

Please go through this guide to learn how to manage your virtual environment managers before you install NLTK, [https://docs.python-guide.org/dev/virtualenvs/](https://docs.python-guide.org/dev/virtualenvs/)

Alternatively, you can use the Anaconda distribution installer that comes “batteries included” [https://www.anaconda.com/distribution/](https://www.anaconda.com/distribution/)

## Mac/Unix[¶](#mac-unix)

Install NLTK: run

`pip install --user -U nltk`

Install Numpy (optional): run

`pip install --user -U numpy`

Test installation: run

`python`

then type`import nltk`


For older versions of Python it might be necessary to install setuptools (see [https://pypi.python.org/pypi/setuptools](https://pypi.python.org/pypi/setuptools)) and to install pip (`sudo easy_install pip`

).

## Windows[¶](#windows)

These instructions assume that you do not already have Python installed on your machine.

### 32-bit binary installation[¶](#bit-binary-installation)

Install Python 3.12:

[https://www.python.org/downloads/](https://www.python.org/downloads/)(avoid the 64-bit versions)Install Numpy (optional):

[https://numpy.org/install/](https://numpy.org/install/)Install NLTK:

[https://pypi.python.org/pypi/nltk](https://pypi.python.org/pypi/nltk)Test installation:

`Start>Python312`

, then type`import nltk`


## Installing Third-Party Software[¶](#installing-third-party-software)

Please see: [https://github.com/nltk/nltk/wiki/Installing-Third-Party-Software](https://github.com/nltk/nltk/wiki/Installing-Third-Party-Software)

## Installing NLTK Data[¶](#installing-nltk-data)

After installing the NLTK package, please do install the necessary datasets/models for specific functions to work.

If you’re unsure of which datasets/models you’ll need, you can install the “popular” subset of NLTK data, on the command line type `python -m nltk.downloader popular`

, or in the Python interpreter `import nltk; nltk.download('popular')`


For details, see [https://www.nltk.org/data.html](https://www.nltk.org/data.html)

---

## Source: https://www.nltk.org/data.html

# Installing NLTK Data[¶](#installing-nltk-data)

NLTK comes with many corpora, toy grammars, trained models, etc. A complete list is posted at: [https://www.nltk.org/nltk_data/](https://www.nltk.org/nltk_data/)

To install the data, first install NLTK (see [https://www.nltk.org/install.html](https://www.nltk.org/install.html)), then use NLTK’s data downloader as described below.

Apart from individual data packages, you can download the entire collection (using “all”), or just the data required for the examples and exercises in the book (using “book”), or just the corpora and no grammars or trained models (using “all-corpora”).

## Interactive installer[¶](#interactive-installer)

*For central installation on a multi-user machine, do the following from an administrator account.*

Run the Python interpreter and type the commands:

```
>>> import nltk
>>> nltk.download()
```

A new window should open, showing the NLTK Downloader. Click on the File menu and select Change Download Directory. For central installation, set this to `C:\nltk_data`

(Windows), `/usr/local/share/nltk_data`

(Mac), or `/usr/share/nltk_data`

(Unix). Next, select the packages or collections you want to download.

If you did not install the data to one of the above central locations, you will need to set the `NLTK_DATA`

environment variable to specify the location of the data. (On a Windows machine, right click on “My Computer” then select `Properties > Advanced > Environment Variables > User Variables > New...`

)

Test that the data has been installed as follows. (This assumes you downloaded the Brown Corpus):

```
>>> from nltk.corpus import brown
>>> brown.words()
['The', 'Fulton', 'County', 'Grand', 'Jury', 'said', ...]
```

### Installing via a proxy web server[¶](#installing-via-a-proxy-web-server)

If your web connection uses a proxy server, you should specify the proxy address as follows. In the case of an authenticating proxy, specify a username and password. If the proxy is set to None then this function will attempt to detect the system proxy.

```
>>> nltk.set_proxy('http://proxy.example.com:3128', ('USERNAME', 'PASSWORD'))
>>> nltk.download()
```

## Command line installation[¶](#command-line-installation)

The downloader will search for an existing `nltk_data`

directory to install NLTK data. If one does not exist it will attempt to create one in a central location (when using an administrator account) or otherwise in the user’s filespace. If necessary, run the download command from an administrator account, or using sudo. The recommended system location is `C:\nltk_data`

(Windows); `/usr/local/share/nltk_data`

(Mac); and `/usr/share/nltk_data`

(Unix). You can use the `-d`

flag to specify a different location (but if you do this, be sure to set the `NLTK_DATA`

environment variable accordingly).

Run the command `python -m nltk.downloader all`

. To ensure central installation, run the command `sudo python -m nltk.downloader -d /usr/local/share/nltk_data all`

.

Windows: Use the “Run…” option on the Start menu. Windows Vista users need to first turn on this option, using `Start -> Properties -> Customize`

to check the box to activate the “Run…” option.

Test the installation: Check that the user environment and privileges are set correctly by logging in to a user account, starting the Python interpreter, and accessing the Brown Corpus (see the previous section).

## Manual installation[¶](#manual-installation)

Create a folder `nltk_data`

, e.g. `C:\nltk_data`

, or `/usr/local/share/nltk_data`

,
and subfolders `chunkers`

, `grammars`

, `misc`

, `sentiment`

, `taggers`

, `corpora`

,
`help`

, `models`

, `stemmers`

, `tokenizers`

.

Download individual packages from `https://www.nltk.org/nltk_data/`

(see the “download” links).
Unzip them to the appropriate subfolder. For example, the Brown Corpus, found at:
`https://raw.githubusercontent.com/nltk/nltk_data/gh-pages/packages/corpora/brown.zip`

is to be unzipped to `nltk_data/corpora/brown`

.

Set your `NLTK_DATA`

environment variable to point to your top level `nltk_data`

folder.

---

## Source: https://www.nltk.org/news.html

# Release Notes[¶](#release-notes)

## 2025[¶](#id1)

NLTK 3.9.2 release: October 2025:

Update download checksums to use SHA256 in built index

Make Wordnet interoperable with various taggers and tagged corpora

Fix saving PerceptronTagger

Document how to reproduce old Wordnet studies

Only import tkinter if a GUI is needed

new environment variable NLTK_DOWNLOADER_FORCE_INTERACTIVE_SHELL

add Python 3.13 support, drop Python 3.8 support

other minor fixes


## 2024[¶](#id2)

NLTK 3.9.1 release: August 2024:

Fixed bug that prevented wordnet from loading


NLTK 3.9 release: August 2024:

Avoid need for pickled models, resolves security vulnerability CVE-2024-39705

No longer sort WordNet synsets and relations (sort in calling function when required)

Add Python 3.12 support

Many other minor fixes


## 2023[¶](#id3)

NLTK 3.8.1 release: January 2023:

Resolve RCE & XSS vulnerabilities in localhost WordNet Browser

Add Python 3.11 support


## 2022[¶](#id4)

NLTK 3.8 release: December 2022:

Fix WordNet’s all_synsets() function

Greatly improve time efficiency of SyllableTokenizer when tokenizing numbers

Tackle performance and accuracy regression of sentence tokenizer since NLTK 3.6.6

Resolve TreebankWordDetokenizer inconsistency with end-of-string contractions

Optimize ConditionalFreqDist.__add__ performance

Fix LC cutoff policy of text tiling

Add Markdown corpus reader

Add support for the extended OMW

Support both iso639-3 codes and BCP-47 language tags

Fix bool field not being read in VerbNet

Fix encodings of Polish udhr corpus reader

Allow TweetTokenizer to tokenize emoji flag sequences

Add “acion” suffix to the Spanish SnowballStemmer

Allow loading WordNet without OMW

Fix edit_distance_align() in distance.py

Add the Iota operator to semantic logic

Resolve critical error in CHILDES Corpus

Make WordNet information_content() accept adjective satellites

Add “strict=True” parameter to CoreNLP

Resolve issue with WordNet’s synset_from_sense_key

Handle WordNet synsets that were lost in mapping

Add function to retrieve WordNet synonyms

Warn about nonexistent OMW offsets instead of raising an error

Fix missing ic argument in res, jcn and lin similarity functions of WordNet


NLTK 3.7 release: February 2022:

improve and update the NLTK team page on nltk.org

drop support for Python 3.6

add support for Python 3.10


## 2021[¶](#id5)

NLTK 3.6.7 release: December 2021:

resolve issue with word_tokenize and sent_tokenize


NLTK 3.6.6 release: December 2021:

add precision, recall, F-measure, confusion matrix to Taggers

support alternative Wordnet versions (#2860)

support OMW 1.4, use Multilingual Wordnet Data from OMW with newer Wordnet versions

add multi Bleu functionality

allow empty string in CFG’s + more

fix several TreebankWordTokenizer and NLTKWordTokenizer bugs

fix levenstein distance for duplicated letters

modernize nltk.org/howto pages

update third party tools to newer versions


NLTK 3.6.5 release: October 2021:

support emoji ZJW sequences and skin tone modifiers in TweetTokenizer

METEOR evaluation now requires pre-tokenized input

code linting and type hinting

avoid re.Pattern and regex.Pattern which fail for Python 3.6, 3.7


NLTK 3.6.4 release: October 2021

improved phone number recognition in tweet tokenizer

resolved ReDoS vulnerability in Corpus Reader

refactored CISTEM stemmer for German


NLTK 3.6.3 release: September 2021

Drop support for Python 3.5,

added pre-commit hooks (isort, pyupgrade, black),

improvements to WordNet visualization, RIBES score, edit_distance,

METEOR score, Punkt, language model package, TweetTokenizer,

code and comment cleanups,

CI tests now also run on Windows,

moved from Travis CI to GitHub Actions


NLTK 3.6.2 release: April 2021

Minor enhancements


NLTK 3.6 release: April 2021

Add support for Python 3.9

Minor enhancements, bug fixes, code cleanups, efficiency improvements


## 2020[¶](#id6)

NLTK 3.5 release: April 2020

Add support for Python 3.8, drop support for Python 2


## 2019[¶](#id7)

NLTK 3.4.5 release: August 2019

Fixed security bug in downloader: Zip slip vulnerability - for the unlikely situation where a user configures their downloader to use a compromised server

[https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14751](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14751))

NLTK 3.4.4 release: July 2019

Fix bug in plot function (probability.py)

Add improved PanLex Swadesh corpus reader


NLTK 3.4.3 release: June 2019

Add Text.generate(), QuadgramAssocMeasures

Add SSP to tokenizers

Return confidence of best tag from AveragedPerceptron

Make plot methods return Axes objects

Minor bug fixes

Update installation instructions


NLTK 3.4.1 release: April 2019

Add chomsky_normal_form for CFGs

Add meteor score

Add minimum edit/Levenshtein distance based alignment function

Allow access to collocation list via text.collocation_list()

Support corenlp server options

Drop support for Python 3.4

Other minor fixes


## 2018[¶](#id8)

NLTK 3.4 release: November 2018

Support Python 3.7,

New Language Modeling package,

Cistem Stemmer for German,

Support Russian National Corpus incl POS tag model,

Krippendorf Alpha inter-rater reliability test,

Comprehensive code clean-ups,

Switch continuous integration from Jenkins to Travis


NLTK 3.3 release: May 2018

Support Python 3.6,

New interface to CoreNLP,

Support synset retrieval by sense key,

Minor fixes to CoNLL Corpus Reader, AlignedSent,

Fixed minor inconsistencies in APIs and API documentation,

Better conformance to PEP8,

Drop Moses Tokenizer (incompatible license)


## 2017[¶](#id9)

NLTK 3.2.5 release: September 2017

Arabic stemmers (ARLSTem, Snowball),

NIST MT evaluation metric and added NIST international_tokenize,

Moses tokenizer,

Document Russian tagger,

Fix to Stanford segmenter,

Improve treebank detokenizer, VerbNet, Vader,

Misc code and documentation cleanups,

Implement fixes suggested by LGTM


NLTK 3.2.4 released: May 2017

Remove load-time dependency on Python requests library,

Add support for Arabic in StanfordSegmenter


NLTK 3.2.3 released: May 2017

Interface to Stanford CoreNLP Web API, improved Lancaster stemmer,

improved Treebank tokenizer, support custom tab files for extending WordNet,

speed up TnT tagger, speed up FreqDist and ConditionalFreqDist,

new corpus reader for MWA subset of PPDB; improvements to testing framework


## 2016[¶](#id10)

NLTK 3.2.2 released: December 2016

Support for Aline, ChrF and GLEU MT evaluation metrics,

Russian POS tagger model, Moses detokenizer,

rewrite Porter Stemmer and FrameNet corpus reader,

update FrameNet Corpus to version 1.7,

fixes: stanford_segmenter.py, SentiText, CoNLL Corpus Reader,

BLEU, naivebayes, Krippendorff’s alpha, Punkt, Moses tokenizer,

TweetTokenizer, ToktokTokenizer;

improvements to testing framework


NLTK 3.2.1 released: April 2016

Support for CCG semantics, Stanford segmenter, VADER lexicon;

Fixes to BLEU score calculation, CHILDES corpus reader.


NLTK 3.2 released: March 2016

Fixes for Python 3.5, code cleanups now Python 2.6 is no longer supported,

support for PanLex, support for third party download locations for NLTK data,

new support for RIBES score,

BLEU smoothing, corpus-level BLEU, improvements to TweetTokenizer,

updates for Stanford API, add mathematical operators to ConditionalFreqDist,

fix bug in sentiwordnet for adjectives,

improvements to documentation, code cleanups,

consistent handling of file paths for cross-platform operation.


## 2015[¶](#id11)

NLTK 3.1 released: October 2015

Add support for Python 3.5, drop support for Python 2.6,

sentiment analysis package and several corpora,

improved POS tagger, Twitter package,

multi-word expression tokenizer,

wrapper for Stanford Neural Dependency Parser,

improved translation/alignment module including stack decoder,

skipgram and everygram methods,

Multext East Corpus and MTECorpusReader,

minor bugfixes and enhancements


NLTK 3.0.5 released: September 2015

New Twitter package; updates to IBM models 1-3, new models 4 and 5,

minor bugfixes and enhancements


NLTK 3.0.4 released: July 2015

Minor bugfixes and enhancements.


NLTK 3.0.3 released: June 2015

PanLex Swadesh Corpus, tgrep tree search, minor bugfixes.


NLTK 3.0.2 released: March 2015

Senna, BLLIP, python-crfsuite interfaces, transition-based dependency parsers,

dependency graph visualization, NKJP corpus reader, minor bugfixes and clean-ups.


NLTK 3.0.1 released: January 2015

Minor packaging update.


## 2014[¶](#id12)

NLTK 3.0.0 released: September 2014

Minor bugfixes.


NLTK 3.0.0b2 released: August 2014

Minor bugfixes and clean-ups.


NLTK Book Updates: July 2014

The NLTK book is being updated for Python 3 and NLTK 3

[here](https://www.nltk.org/book/).The original Python 2 edition is still available

[here](https://www.nltk.org/book_1ed).

NLTK 3.0.0b1 released: July 2014

FrameNet, SentiWordNet, universal tagset, misc efficiency improvements and bugfixes

Several API changes, see

[https://github.com/nltk/nltk/wiki/Porting-your-code-to-NLTK-3.0](https://github.com/nltk/nltk/wiki/Porting-your-code-to-NLTK-3.0)

NLTK 3.0a4 released: June 2014

FrameNet, universal tagset, misc efficiency improvements and bugfixes

Several API changes, see

[https://github.com/nltk/nltk/wiki/Porting-your-code-to-NLTK-3.0](https://github.com/nltk/nltk/wiki/Porting-your-code-to-NLTK-3.0)For full details see:

[http://nltk.org/nltk3-alpha/](http://nltk.org/nltk3-alpha/)(Dead link; see archive at[https://web.archive.org/web/20141018104200/https://nltk.org/nltk3-alpha/](https://web.archive.org/web/20141018104200/https://nltk.org/nltk3-alpha/))

## 2013[¶](#id13)

NLTK Book Updates: October 2013

We are updating the NLTK book for Python 3 and NLTK 3; please see


NLTK 3.0a2 released: July 2013

Misc efficiency improvements and bugfixes; for details see

[http://nltk.org/nltk3-alpha/](http://nltk.org/nltk3-alpha/)(Dead link; see archive at[https://web.archive.org/web/20141018104200/https://nltk.org/nltk3-alpha/](https://web.archive.org/web/20141018104200/https://nltk.org/nltk3-alpha/))

NLTK 3.0a1 released: February 2013

This version adds support for NLTK’s graphical user interfaces.

[http://nltk.org/nltk3-alpha/](http://nltk.org/nltk3-alpha/)(Dead link; see archive at[https://web.archive.org/web/20141018104200/https://nltk.org/nltk3-alpha/](https://web.archive.org/web/20141018104200/https://nltk.org/nltk3-alpha/))

NLTK 3.0a0 released: January 2013

The first alpha release of NLTK 3.0 is now available for testing. This version of NLTK works with Python 2.6, 2.7, and Python 3.

[http://nltk.org/nltk3-alpha/](http://nltk.org/nltk3-alpha/)(Dead link; see archive at[https://web.archive.org/web/20141018104200/https://nltk.org/nltk3-alpha/](https://web.archive.org/web/20141018104200/https://nltk.org/nltk3-alpha/))

## 2012[¶](#id14)

Python Grant: November 2012

The Python Software Foundation is sponsoring Mikhail Korobov’s work on porting NLTK to Python 3.

[https://pyfound.blogspot.hu/2012/11/grants-to-assist-kivy-nltk-in-porting.html](https://pyfound.blogspot.hu/2012/11/grants-to-assist-kivy-nltk-in-porting.html)

NLTK 2.0.4 released: November 2012

Minor fix to remove numpy dependency.


NLTK 2.0.3 released: September 2012

This release contains minor improvements and bugfixes. This is the final release compatible with Python 2.5.


NLTK 2.0.2 released: July 2012

This release contains minor improvements and bugfixes.


NLTK 2.0.1 released: May 2012

The final release of NLTK 2.


NLTK 2.0.1rc4 released: February 2012

The fourth release candidate for NLTK 2.


NLTK 2.0.1rc3 released: January 2012

The third release candidate for NLTK 2.


## 2011[¶](#id15)

NLTK 2.0.1rc2 released: December 2011

The second release candidate for NLTK 2. For full details see the ChangeLog.


NLTK development moved to GitHub: October 2011

The development site for NLTK has moved from GoogleCode to GitHub:

[https://github.com/nltk](https://github.com/nltk)

NLTK 2.0.1rc1 released: April 2011

The first release candidate for NLTK 2. For full details see the ChangeLog.


## 2010[¶](#id16)

Python Text Processing with NLTK 2.0 Cookbook: December 2010

Jacob Perkins has written a 250-page cookbook full of great recipes for text processing using Python and NLTK, published by Packt Publishing. Some of the royalties are being donated to the NLTK project.


Japanese translation of NLTK book: November 2010

Masato Hagiwara has translated the NLTK book into Japanese, along with an extra chapter on particular issues with Japanese language process. See

[https://www.oreilly.co.jp/books/9784873114705/](https://www.oreilly.co.jp/books/9784873114705/).

NLTK 2.0b9 released: July 2010

The last beta release before 2.0 final. For full details see the ChangeLog.


NLTK in Ubuntu 10.4 (Lucid Lynx): February 2010

NLTK is now in the latest LTS version of Ubuntu, thanks to the efforts of Robin Munn. See

[https://packages.ubuntu.com/lucid/python/python-nltk](https://packages.ubuntu.com/lucid/python/python-nltk)

NLTK 2.0b? released: June 2009 - February 2010

Bugfix releases in preparation for 2.0 final. For full details see the ChangeLog.


## 2009[¶](#id17)

NLTK Book in second printing: December 2009

The second print run of Natural Language Processing with Python will go on sale in January. We’ve taken the opportunity to make about 40 minor corrections. The online version has been updated.


NLTK Book published: June 2009

Natural Language Processing with Python, by Steven Bird, Ewan Klein and Edward Loper, has been published by O’Reilly Media Inc. It can be purchased in hardcopy, ebook, PDF or for online access, at

[https://oreilly.com/catalog/9780596516499/](https://oreilly.com/catalog/9780596516499/). For information about sellers and prices, see[https://isbndb.com/d/book/natural_language_processing_with_python/prices.html](https://isbndb.com/d/book/natural_language_processing_with_python/prices.html).

Version 0.9.9 released: May 2009

This version finalizes NLTK’s API ahead of the 2.0 release and the publication of the NLTK book. There have been dozens of minor enhancements and bugfixes. Many names of the form nltk.foo.Bar are now available as nltk.Bar. There is expanded functionality in the decision tree, collocations, and Toolbox modules. A new translation toy nltk.misc.babelfish has been added. A new module nltk.help gives access to tagset documentation. Fixed imports so NLTK will build and install without Tkinter (for running on servers). New data includes a maximum entropy chunker model and updated grammars. NLTK Contrib includes updates to the coreference package (Joseph Frazee) and the ISRI Arabic stemmer (Hosam Algasaier). The book has undergone substantial editorial corrections ahead of final publication. For full details see the ChangeLog.


Version 0.9.8 released: February 2009

This version contains a new off-the-shelf tokenizer, POS tagger, and named-entity tagger. A new metrics package includes inter-annotator agreement scores and various distance and word association measures (Tom Lippincott and Joel Nothman). There’s a new collocations package (Joel Nothman). There are many improvements to the WordNet package and browser (Steven Bethard, Jordan Boyd-Graber, Paul Bone), and to the semantics and inference packages (Dan Garrette). The NLTK corpus collection now includes the PE08 Parser Evaluation data, and the CoNLL 2007 Basque and Catalan Dependency Treebanks. We have added an interface for dependency treebanks. Many chapters of the book have been revised in response to feedback from readers. For full details see the ChangeLog. NB some method names have been changed for consistency and simplicity. Use of old names will generate deprecation warnings that indicate the correct name to use.


## 2008[¶](#id18)

Version 0.9.7 released: December 2008

This version contains fixes to the corpus downloader (see instructions) enabling NLTK corpora to be released independently of the software, and to be stored in compressed format. There are improvements in the grammars, chart parsers, probability distributions, sentence segmenter, text classifiers and RTE classifier. There are many further improvements to the book. For full details see the ChangeLog.


Version 0.9.6 released: December 2008

This version has an incremental corpus downloader (see instructions) enabling NLTK corpora to be released independently of the software. A new WordNet interface has been developed by Steven Bethard (details). NLTK now has support for dependency parsing, developed by Jason Narad (sponsored by Google Summer of Code). There are many enhancements to the semantics and inference packages, contributed by Dan Garrette. The frequency distribution classes have new support for tabulation and plotting. The Brown Corpus reader has human readable category labels instead of letters. A new Swadesh Corpus containing comparative wordlists has been added. NLTK-Contrib includes a TIGERSearch implementation for searching treebanks (Torsten Marek). Most chapters of the book have been substantially revised.


The NLTK Project has moved: November 2008

The NLTK project has moved to Google Sites, Google Code and Google Groups. Content for users and the nltk.org domain is hosted on Google Sites. The home of NLTK development is now Google Code. All discussion lists are at Google Groups. Our old site at nltk.sourceforge.net will continue to be available while we complete this transition. Old releases are still available via our SourceForge release page. We’re grateful to SourceForge for hosting our project since its inception in 2001.


Version 0.9.5 released: August 2008

This version contains several low-level changes to facilitate installation, plus updates to several NLTK-Contrib projects. A new text module gives easy access to text corpora for newcomers to NLP. For full details see the ChangeLog.


Version 0.9.4 released: August 2008

This version contains a substantially expanded semantics package contributed by Dan Garrette, improvements to the chunk, tag, wordnet, tree and feature-structure modules, Mallet interface, ngram language modeling, new GUI tools (WordNet? browser, chunking, POS-concordance). The data distribution includes the new NPS Chat Corpus. NLTK-Contrib includes the following new packages (still undergoing active development) NLG package (Petro Verkhogliad), dependency parsers (Jason Narad), coreference (Joseph Frazee), CCG parser (Graeme Gange), and a first order resolution theorem prover (Dan Garrette). For full details see the ChangeLog.


NLTK presented at ACL conference: June 2008

A paper on teaching courses using NLTK will be presented at the ACL conference: Multidisciplinary Instruction with the Natural Language Toolkit


Version 0.9.3 released: June 2008

This version contains an improved WordNet? similarity module using pre-built information content files (included in the corpus distribution), new/improved interfaces to Weka, MEGAM and Prover9/Mace4 toolkits, improved Unicode support for corpus readers, a BNC corpus reader, and a rewrite of the Punkt sentence segmenter contributed by Joel Nothman. NLTK-Contrib includes an implementation of incremental algorithm for generating referring expression contributed by Margaret Mitchell. For full details see the ChangeLog.


NLTK presented at LinuxFest Northwest: April 2008

Sean Boisen presented NLTK at LinuxFest Northwest, which took place in Bellingham, Washington. His presentation slides are available at:

[https://semanticbible.com/other/talks/2008/nltk/main.html](https://semanticbible.com/other/talks/2008/nltk/main.html)

NLTK in Google Summer of Code: April 2008

Google Summer of Code will sponsor two NLTK projects. Jason Narad won funding for a project on dependency parsers in NLTK (mentored by Sebastian Riedel and Jason Baldridge). Petro Verkhogliad won funding for a project on natural language generation in NLTK (mentored by Robert Dale and Edward Loper).


Python Software Foundation adopts NLTK for Google Summer of Code application: March 2008

The Python Software Foundation has listed NLTK projects for sponsorship from the 2008 Google Summer of Code program. For details please see

[https://wiki.python.org/moin/SummerOfCode](https://wiki.python.org/moin/SummerOfCode).

Version 0.9.2 released: March 2008

This version contains a new inference module linked to the Prover9/Mace4 theorem-prover and model checker (Dan Garrette, Ewan Klein). It also includes the VerbNet? and PropBank? corpora along with corpus readers. A bug in the Reuters corpus reader has been fixed. NLTK-Contrib includes new work on the WordNet? browser (Jussi Salmela). For full details see the ChangeLog


Youtube video about NLTK: January 2008

The video from of the NLTK talk at the Bay Area Python Interest Group last July has been posted at

[https://www.youtube.com/watch?v=keXW_5-llD0](https://www.youtube.com/watch?v=keXW_5-llD0)(1h15m)

Version 0.9.1 released: January 2008

This version contains new support for accessing text categorization corpora, along with several corpora categorized for topic, genre, question type, or sentiment. It includes several new corpora: Question classification data (Li & Roth), Reuters 21578 Corpus, Movie Reviews corpus (Pang & Lee), Recognising Textual Entailment (RTE) Challenges. NLTK-Contrib includes expanded support for semantics (Dan Garrette), readability scoring (Thomas Jakobsen, Thomas Skardal), and SIL Toolbox (Greg Aumann). The book contains many improvements in early chapters in response to reader feedback. For full details see the ChangeLog.


## 2007[¶](#id19)

NLTK-Lite 0.9 released: October 2007

This version is substantially revised and expanded from version 0.8. The entire toolkit can be accessed via a single import statement “import nltk”, and there is a more convenient naming scheme. Calling deprecated functions generates messages that help programmers update their code. The corpus, tagger, and classifier modules have been redesigned. All functionality of the old NLTK 1.4.3 is now covered by NLTK-Lite 0.9. The book has been revised and expanded. A new data package incorporates the existing corpus collection and contains new sections for pre-specified grammars and pre-computed models. Several new corpora have been added, including treebanks for Portuguese, Spanish, Catalan and Dutch. A Macintosh distribution is provided. For full details see the ChangeLog.


NLTK-Lite 0.9b2 released: September 2007

This version is substantially revised and expanded from version 0.8. The entire toolkit can be accessed via a single import statement “import nltk”, and many common NLP functions accessed directly, e.g. nltk.PorterStemmer?, nltk.ShiftReduceParser?. The corpus, tagger, and classifier modules have been redesigned. The book has been revised and expanded, and the chapters have been reordered. NLTK has a new data package incorporating the existing corpus collection and adding new sections for pre-specified grammars and pre-computed models. The Floresta Portuguese Treebank has been added. Release 0.9b2 fixes several minor problems with 0.9b1 and removes the numpy dependency. It includes a new corpus and corpus reader for Brazilian Portuguese news text (MacMorphy?) and an improved corpus reader for the Sinica Treebank, and a trained model for Portuguese sentence segmentation.


NLTK-Lite 0.9b1 released: August 2007

This version is substantially revised and expanded from version 0.8. The entire toolkit can be accessed via a single import statement “import nltk”, and many common NLP functions accessed directly, e.g. nltk.PorterStemmer?, nltk.ShiftReduceParser?. The corpus, tagger, and classifier modules have been redesigned. The book has been revised and expanded, and the chapters have been reordered. NLTK has a new data package incorporating the existing corpus collection and adding new sections for pre-specified grammars and pre-computed models. The Floresta Portuguese Treebank has been added. For full details see the ChangeLog?.


NLTK talks in São Paulo: August 2007

Steven Bird will present NLTK in a series of talks at the First Brazilian School on Computational Linguistics, at the University of São Paulo in the first week of September.


NLTK talk in Bay Area: July 2007

Steven Bird, Ewan Klein, and Edward Loper will present NLTK at the Bay Area Python Interest Group, at Google on Thursday 12 July.


NLTK-Lite 0.8 released: July 2007

This version is substantially revised and expanded from version 0.7. The code now includes improved interfaces to corpora, chunkers, grammars, frequency distributions, full integration with WordNet? 3.0 and WordNet? similarity measures. The book contains substantial revision of Part I (tokenization, tagging, chunking) and Part II (grammars and parsing). NLTK has several new corpora including the Switchboard Telephone Speech Corpus transcript sample (Talkbank Project), CMU Problem Reports Corpus sample, CONLL2002 POS+NER data, Patient Information Leaflet corpus sample, Indian POS-Tagged data (Bangla, Hindi, Marathi, Telugu), Shakespeare XML corpus sample, and the Universal Declaration of Human Rights corpus with text samples in 300+ languages.


NLTK features in Language Documentation and Conservation article: July 2007

An article Managing Fieldwork Data with Toolbox and the Natural Language Toolkit by Stuart Robinson, Greg Aumann, and Steven Bird appears in the inaugural issue of ‘’Language Documentation and Conservation’’. It discusses several small Python programs for manipulating field data.


NLTK features in ACM Crossroads article: May 2007

An article Getting Started on Natural Language Processing with Python by Nitin Madnani will appear in ‘’ACM Crossroads’’, the ACM Student Journal. It discusses NLTK in detail, and provides several helpful examples including an entertaining free word association program.


NLTK-Lite 0.7.5 released: May 2007

This version contains improved interfaces for WordNet 3.0 and WordNet-Similarity, the Lancaster Stemmer (contributed by Steven Tomcavage), and several new corpora including the Switchboard Telephone Speech Corpus transcript sample (Talkbank Project), CMU Problem Reports Corpus sample, CONLL2002 POS+NER data, Patient Information Leaflet corpus sample and WordNet 3.0 data files. With this distribution WordNet no longer needs to be separately installed.


NLTK-Lite 0.7.4 released: May 2007

This release contains new corpora and corpus readers for Indian POS-Tagged data (Bangla, Hindi, Marathi, Telugu), and the Sinica Treebank, and substantial revision of Part II of the book on structured programming, grammars and parsing.


NLTK-Lite 0.7.3 released: April 2007

This release contains improved chunker and PCFG interfaces, the Shakespeare XML corpus sample and corpus reader, improved tutorials and improved formatting of code samples, and categorization of problem sets by difficulty.


NLTK-Lite 0.7.2 released: March 2007

This release contains new text classifiers (Cosine, NaiveBayes?, Spearman), contributed by Sam Huston, simple feature detectors, the UDHR corpus with text samples in 300+ languages and a corpus interface; improved tutorials (340 pages in total); additions to contrib area including Kimmo finite-state morphology system, Lambek calculus system, and a demonstration of text classifiers for language identification.


NLTK-Lite 0.7.1 released: January 2007

This release contains bugfixes in the WordNet? and HMM modules.


## 2006[¶](#id20)

NLTK-Lite 0.7 released: December 2006

This release contains: new semantic interpretation package (Ewan Klein), new support for SIL Toolbox format (Greg Aumann), new chunking package including cascaded chunking (Steven Bird), new interface to WordNet? 2.1 and Wordnet similarity measures (David Ormiston Smith), new support for Penn Treebank format (Yoav Goldberg), bringing the codebase to 48,000 lines; substantial new chapters on semantic interpretation and chunking, and substantial revisions to several other chapters, bringing the textbook documentation to 280 pages;


NLTK-Lite 0.7b1 released: December 2006

This release contains: new semantic interpretation package (Ewan Klein), new support for SIL Toolbox format (Greg Aumann), new chunking package including cascaded chunking, wordnet package updated for version 2.1 of Wordnet, and prototype wordnet similarity measures (David Ormiston Smith), bringing the codebase to 48,000 lines; substantial new chapters on semantic interpretation and chunking, and substantial revisions to several other chapters, bringing the textbook documentation to 270 pages;


NLTK-Lite 0.6.6 released: October 2006

This release contains bugfixes, improvements to Shoebox file format support, and expanded tutorial discussions of programming and feature-based grammars.


NLTK-Lite 0.6.5 released: July 2006

This release contains improvements to Shoebox file format support (by Stuart Robinson and Greg Aumann); an implementation of hole semantics (by Peter Wang); improvements to lambda calculus and semantic interpretation modules (by Ewan Klein); a new corpus (Sinica Treebank sample); and expanded tutorial discussions of trees, feature-based grammar, unification, PCFGs, and more exercises.


NLTK-Lite passes 10k download milestone: May 2006

We have now had 10,000 downloads of NLTK-Lite in the nine months since it was first released.


NLTK-Lite 0.6.4 released: April 2006

This release contains new corpora (Senseval 2, TIMIT sample), a clusterer, cascaded chunker, and several substantially revised tutorials.


## 2005[¶](#id21)

NLTK 1.4 no longer supported: December 2005

The main development has switched to NLTK-Lite. The latest version of NLTK can still be downloaded; see the installation page for instructions.


NLTK-Lite 0.6 released: November 2005

contains bug-fixes, PDF versions of tutorials, expanded fieldwork tutorial, PCFG grammar induction (by Nathan Bodenstab), and prototype concordance and paradigm display tools (by Peter Spiller and Will Hardy).


NLTK-Lite 0.5 released: September 2005

contains bug-fixes, improved tutorials, more project suggestions, and a pronunciation dictionary.


NLTK-Lite 0.4 released: September 2005

contains bug-fixes, improved tutorials, more project suggestions, and probabilistic parsers.


NLTK-Lite 0.3 released: August 2005

contains bug-fixes, documentation clean-up, project suggestions, and the chart parser demos including one for Earley parsing by Jean Mark Gawron.


NLTK-Lite 0.2 released: July 2005

contains bug-fixes, documentation clean-up, and some translations of tutorials into Brazilian Portuguese by Tiago Tresoldi.


NLTK-Lite 0.1 released: July 2005

substantially simplified and streamlined version of NLTK has been released


Brazilian Portuguese Translation: April 2005

top-level pages of this website have been translated into Brazilian Portuguese by Tiago Tresoldi; translations of the tutorials are in preparation

[http://hermes.sourceforge.net/nltk-br/](http://hermes.sourceforge.net/nltk-br/)

1.4.3 Release: February 2005

NLTK 1.4.3 has been released; this is the first version which is compatible with Python 2.4.

---

## Source: https://www.nltk.org/contribute.html

# Contributing to NLTK[¶](#contributing-to-nltk)

The Natural Language Toolkit exists thanks to the efforts of dozens
of voluntary developers who have contributed functionality and
bugfixes since the project began in 2000 ([contributors](https://github.com/nltk/nltk/blob/develop/AUTHORS.md)).
Information for contributors:

The Natural Language Toolkit exists thanks to the efforts of dozens
of voluntary developers who have contributed functionality and
bugfixes since the project began in 2000 ([contributors](https://github.com/nltk/nltk/blob/develop/AUTHORS.md)).
Information for contributors:

---

## Source: https://www.nltk.org/team.html

# NLTK Team[¶](#nltk-team)

Alexis Dimitradis

[¶](#alexisdimi)[@alexisdimi](https://www.github.com/alexisdimi)
Danny Sepler

[¶](#dannysepler)[@dannysepler](https://www.github.com/dannysepler)
purificant

[¶](#purificant)[@purificant](https://www.github.com/purificant)## Former NLTK Team Members[¶](#former-nltk-team-members)

Dan Garrette

[¶](#dhgarrette)[@dhgarrette](https://www.github.com/dhgarrette)
Alex Rudnick

[¶](#alexrudnick)[@alexrudnick](https://www.github.com/alexrudnick)
Ewan Klein

---

## Source: https://www.nltk.org/book/

# Natural Language Processing with Python

## – Analyzing Text with the Natural Language Toolkit

**Steven Bird, Ewan Klein, and Edward Loper**
*This version of the NLTK book is updated for Python 3 and NLTK 3.
The first edition of the book, published by O'Reilly, is available at
*[http://nltk.org/book_1ed/](http://nltk.org/book_1ed/).
(There are currently no plans for a second edition of the book.)

- 0.
[Preface](ch00.html)
- 1.
[Language Processing and Python](ch01.html)
- 2.
[Accessing Text Corpora and Lexical Resources](ch02.html)
- 3.
[Processing Raw Text](ch03.html)
- 4.
[Writing Structured Programs](ch04.html)
- 5.
[Categorizing and Tagging Words](ch05.html) (minor fixes still required)
- 6.
[Learning to Classify Text](ch06.html)
- 7.
[Extracting Information from Text](ch07.html)
- 8.
[Analyzing Sentence Structure](ch08.html)
- 9.
[Building Feature Based Grammars](ch09.html)
- 10.
[Analyzing the Meaning of Sentences](ch10.html) (minor fixes still required)
- 11.
[Managing Linguistic Data](ch11.html) (minor fixes still required)
- 12.
[Afterword: Facing the Language Challenge](ch12.html)
[Bibliography](bibliography.html)

[Term Index](term_index.html)


*This book is made available under the terms of the *[Creative Commons Attribution Noncommercial No-Derivative-Works 3.0 US License](http://creativecommons.org/licenses/by-nc-nd/3.0/us/).

Please post any questions about the materials to the [nltk-users](http://groups.google.com/group/nltk-users) mailing list.
Please report any errors on the [issue tracker](https://github.com/nltk/nltk_book/issues).

---

## Source: https://www.nltk.org/book_1ed

Natural Language Processing with Python
--- Analyzing Text with the Natural Language Toolkit
Steven Bird, Ewan Klein, and Edward Loper
O'Reilly Media, 2009
|
Sellers and prices
The book is being updated for Python 3 and NLTK 3. Please see
http://www.nltk.org/book
.
0.
Preface
(
extras
)
1.
Language Processing and Python
(
extras
)
2.
Accessing Text Corpora and Lexical Resources
(
extras
)
3.
Processing Raw Text
4.
Writing Structured Programs
(
extras
)
5.
Categorizing and Tagging Words
6.
Learning to Classify Text
(
extras
)
7.
Extracting Information from Text
8.
Analyzing Sentence Structure
(
extras
)
9.
Building Feature Based Grammars
10.
Analyzing the Meaning of Sentences
(
extras
)
11.
Managing Linguistic Data
12.
Afterword: Facing the Language Challenge
Bibliography
Term Index
Errata
(corrected here, and in the second printing of book (January 2010))
Translations
:
Book
(jp),
Prefácio
(pt),
Przedmowa
(pl)
Reviews
:
LanguageLog
,
Amazon.com
,
Slashdot.org
,
Dr Dobbs
This book is made available under the terms of the
Creative Commons Attribution Noncommercial No-Derivative-Works 3.0 US License
.
Please post any questions about the materials to the
nltk-users
mailing list. Please report any errors on the
issue tracker
. Note that the "extras" sections are not part of the published book, and will continue to be expanded.

---

## Source: https://www.nltk.org/_sources/index.rst.txt

Natural Language Toolkit
========================
NLTK is a leading platform for building Python programs to work with human language data.
It provides easy-to-use interfaces to `over 50 corpora and lexical
resources `_ such as WordNet,
along with a suite of text processing libraries for classification, tokenization, stemming, tagging, parsing, and semantic reasoning,
wrappers for industrial-strength NLP libraries,
and an active `discussion forum `_.
Thanks to a hands-on guide introducing programming fundamentals alongside topics in computational linguistics, plus comprehensive API documentation,
NLTK is suitable for linguists, engineers, students, educators, researchers, and industry users alike.
NLTK is available for Windows, Mac OS X, and Linux. Best of all, NLTK is a free, open source, community-driven project.
NLTK has been called "a wonderful tool for teaching, and working in, computational linguistics using Python,"
and "an amazing library to play with natural language."
`Natural Language Processing with Python `_ provides a practical
introduction to programming for language processing.
Written by the creators of NLTK, it guides the reader through the fundamentals
of writing Python programs, working with corpora, categorizing text, analyzing linguistic structure,
and more.
The online version of the book has been been updated for Python 3 and NLTK 3.
(The original Python 2 version is still available at `https://www.nltk.org/book_1ed `_.)
Some simple things you can do with NLTK
---------------------------------------
Tokenize and tag some text:
>>> import nltk
>>> sentence = """At eight o'clock on Thursday morning
... Arthur didn't feel very good."""
>>> tokens = nltk.word_tokenize(sentence)
>>> tokens
['At', 'eight', "o'clock", 'on', 'Thursday', 'morning',
'Arthur', 'did', "n't", 'feel', 'very', 'good', '.']
>>> tagged = nltk.pos_tag(tokens)
>>> tagged[0:6]
[('At', 'IN'), ('eight', 'CD'), ("o'clock", 'JJ'), ('on', 'IN'),
('Thursday', 'NNP'), ('morning', 'NN')]
Identify named entities:
>>> entities = nltk.chunk.ne_chunk(tagged)
>>> entities
Tree('S', [('At', 'IN'), ('eight', 'CD'), ("o'clock", 'JJ'),
('on', 'IN'), ('Thursday', 'NNP'), ('morning', 'NN'),
Tree('PERSON', [('Arthur', 'NNP')]),
('did', 'VBD'), ("n't", 'RB'), ('feel', 'VB'),
('very', 'RB'), ('good', 'JJ'), ('.', '.')])
Display a parse tree:
>>> from nltk.corpus import treebank
>>> t = treebank.parsed_sents('wsj_0001.mrg')[0]
>>> t.draw()
.. image:: _static/images/tree.gif
NB. If you publish work that uses NLTK, please cite the NLTK book as
follows:
Bird, Steven, Edward Loper and Ewan Klein (2009), *Natural Language Processing with Python*. O'Reilly Media Inc.
Next Steps
----------
* `Sign up for release announcements `_
* `Join in the discussion `_
.. toctree::
:maxdepth: 1
:hidden:
:caption: NLTK Documentation
API Reference
Example Usage
Module Index
Wiki
FAQ
Open Issues
NLTK on GitHub
.. toctree::
:maxdepth: 1
:hidden:
:caption: Installation
install
data
.. toctree::
:maxdepth: 1
:hidden:
:caption: More
news
contribute
team